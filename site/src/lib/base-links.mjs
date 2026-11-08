// Docs Markdown links to site pages are written from the site root ("/docs/install/", "/download/"); this Sätteri
// (Astro's Markdown engine) plugin puts the base path in front of them at build time, so changing `base` (e.g. for a
// custom domain) needs no edits in the docs.
export function baseLinksPlugin(base) {
  const prefix = base.replace(/\/$/, "");
  return {
    name: "simple-desk-base-links",
    element: {
      filter: ["a"],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (typeof href !== "string" || !prefix) return;
        if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith(prefix + "/")) {
          ctx.setProperty(node, "href", prefix + href);
        }
      },
    },
  };
}
