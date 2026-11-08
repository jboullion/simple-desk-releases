// Docs Markdown links to site pages are written from the site root ("/docs/install/", "/download/"); this puts the
// base path in front of them at build time, so changing `base` (e.g. for a custom domain) needs no edits in the docs.
export function remarkBaseLinks({ base }) {
  const prefix = base.replace(/\/$/, "");
  const visit = (node) => {
    if ((node.type === "link" || node.type === "definition") && typeof node.url === "string") {
      if (node.url.startsWith("/") && !node.url.startsWith("//") && prefix && !node.url.startsWith(prefix + "/")) {
        node.url = prefix + node.url;
      }
    }
    if (node.children) node.children.forEach(visit);
  };
  return () => (tree) => visit(tree);
}
