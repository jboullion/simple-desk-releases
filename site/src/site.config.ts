// Everything about the site that might change lives here.

export const siteConfig = {
  name: "Simple Desk",
  tagline: "A free office suite for your own files.",
  description:
    "Simple Desk is a free personal office suite for Windows, macOS, Linux and Android: Markdown, CSV, PDF, Paint, a whiteboard, a graphing calculator and more, working on plain files on your disk.",

  /** Origin the site is served from. With a custom domain later, put it here and set `base` to "/". */
  site: "https://jboullion.github.io",
  /** GitHub Pages project sites live under the repository name. */
  base: "/simple-desk-releases",

  /** Public repository with the release files and the update feed. */
  releasesRepo: "jboullion/simple-desk-releases",

  /** Buy Me a Coffee username. Empty hides the button. */
  buyMeACoffee: "",

  /** Shown on the privacy and terms pages. */
  contactEmail: "jboullion83@gmail.com",

  /** Last time the privacy policy or terms changed in substance. */
  legalUpdated: "November 8, 2026",
} as const;

export const releasesUrl = `https://github.com/${siteConfig.releasesRepo}/releases`;
export const latestReleaseUrl = `${releasesUrl}/latest`;
export const buyMeACoffeeUrl = siteConfig.buyMeACoffee
  ? `https://buymeacoffee.com/${siteConfig.buyMeACoffee}`
  : "";
