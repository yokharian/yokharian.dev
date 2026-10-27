import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = () => {
  const sitemapURL = new URL("https://yokharian.dev/sitemap.xml");
  return new Response(getRobotsTxt(sitemapURL));
};
