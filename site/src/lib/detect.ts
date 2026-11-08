// Browser-side guess at the visitor's platform, to highlight the right download. Pages work without it.
import type { PlatformId } from "./release";

export function detectPlatform(): PlatformId | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const hint = `${nav.userAgentData?.platform ?? ""} ${navigator.userAgent}`.toLowerCase();
  if (hint.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(hint)) return null;
  if (hint.includes("win")) return "windows";
  if (hint.includes("mac")) return "macos";
  if (hint.includes("linux") || hint.includes("x11")) return "linux";
  return null;
}

export const platformNames: Record<PlatformId, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
  android: "Android",
};
