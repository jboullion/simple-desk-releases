// The latest GitHub release, read once at build time. The Pages workflow rebuilds the site when a release is
// published or edited, so the download page always points at the current files. If the API can't be reached, the
// build still succeeds and every button links to the releases page instead.
import { marked } from "marked";
import { latestReleaseUrl, siteConfig } from "../site.config";

export type PlatformId = "windows" | "macos" | "linux" | "android";

export interface ReleaseFile {
  name: string;
  url: string;
  size: number;
  /** "Installer", "AppImage", ".deb"… */
  label: string;
}

export interface Release {
  version: string;
  tag: string;
  url: string;
  publishedAt: Date;
  notesHtml: string;
  files: Record<PlatformId, ReleaseFile[]>;
}

/** Which release file belongs to which platform. Updater-only files (.app.tar.gz, .sig, latest.json) match nothing. */
const MATCHERS: { platform: PlatformId; label: string; test: RegExp }[] = [
  { platform: "windows", label: "Installer (.exe)", test: /-setup\.exe$/i },
  { platform: "windows", label: "Installer (.msi)", test: /\.msi$/i },
  { platform: "macos", label: "Disk image (.dmg)", test: /\.dmg$/i },
  { platform: "linux", label: "AppImage", test: /\.AppImage$/i },
  { platform: "linux", label: ".deb (Debian, Ubuntu)", test: /\.deb$/i },
  { platform: "linux", label: ".rpm (Fedora, openSUSE)", test: /\.rpm$/i },
  { platform: "android", label: "APK", test: /\.apk$/i },
];

interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
}
interface GitHubRelease {
  tag_name: string;
  html_url: string;
  published_at: string;
  body: string | null;
  assets: GitHubAsset[];
}

let cached: Promise<Release | null> | undefined;

/** The latest release, or null when it couldn't be fetched. Fetched once per build. */
export function getLatestRelease(): Promise<Release | null> {
  cached ??= fetchLatest();
  return cached;
}

async function fetchLatest(): Promise<Release | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "simple-desk-site",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(`https://api.github.com/repos/${siteConfig.releasesRepo}/releases/latest`, {
      headers,
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status} ${res.statusText}`);
    return toRelease((await res.json()) as GitHubRelease);
  } catch (err) {
    console.warn(`[release] Couldn't read the latest release; download buttons link to ${latestReleaseUrl}.`, err);
    return null;
  }
}

function toRelease(r: GitHubRelease): Release {
  const files: Release["files"] = { windows: [], macos: [], linux: [], android: [] };
  for (const m of MATCHERS) {
    for (const a of r.assets) {
      if (m.test.test(a.name)) {
        files[m.platform].push({ name: a.name, url: a.browser_download_url, size: a.size, label: m.label });
      }
    }
  }
  return {
    version: r.tag_name.replace(/^v/, ""),
    tag: r.tag_name,
    url: r.html_url,
    publishedAt: new Date(r.published_at),
    notesHtml: renderNotes(r.body ?? ""),
    files,
  };
}

/** Release notes as HTML, without lines that point into the private source repository (e.g. "Full Changelog"). */
function renderNotes(body: string): string {
  const publicRepo = siteConfig.releasesRepo.toLowerCase();
  const kept = body
    .split(/\r?\n/)
    .filter((line) => {
      const links = line.match(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+/gi) ?? [];
      return links.every((l) => l.toLowerCase().endsWith(publicRepo));
    })
    .join("\n")
    .trim();
  return kept ? (marked.parse(kept, { async: false }) as string) : "";
}

export function formatSize(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(bytes < 10 * 1024 * 1024 ? 1 : 0)} MB`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
