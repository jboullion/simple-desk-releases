/** A path under the site's base, e.g. url("download/") → "/simple-desk-releases/download/". */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  return `${base}/${clean}`;
}
