// Sub-path the site is served from (e.g. "/illest-garage" on GitHub Pages).
// Empty for root deploys like Netlify. next/link applies basePath itself;
// next/image and plain media src strings need it prefixed manually.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
