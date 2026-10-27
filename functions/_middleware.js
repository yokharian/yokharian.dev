// Cloudflare Pages Function: Markdown content negotiation.
//
// AI agents (and the Context7 "Markdown for Agents" check) request pages with
// `Accept: text/markdown` and expect `Content-Type: text/markdown` back instead
// of HTML. The site is statically generated, so the request is served by an
// edge Function that finds the matching `<path>.md` asset built by the
// `*.md.ts` endpoints and returns it with the Markdown content type.
//
// Host-specific config (`vercel.json` has-header rewrites) cannot do this: the
// CDN never matches on `Accept`, so negotiation has to happen in code.

const SEARCH_LINK =
  '<https://context7.com/api/v2/ask?siteKey=ask_bb39d74af636f4d8ca0d98b9>; rel="search"; type="text/plain"; title="Search yokharian.dev"';

// e.g. "text/markdown", "text/markdown; charset=utf-8", "text/html, text/markdown;q=0.9"
const MARKDOWN_ACCEPT = /(^|[\s,;])text\/markdown\b/i;

/**
 * Map a page path to its Markdown twin.
 * "/" -> "/index.md", "/about" -> "/about.md", "/tags/ai/" -> "/tags/ai.md"
 */
function toMarkdownPath(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/index.md" : `${trimmed}.md`;
}

export async function onRequest(context) {
  const { request, env } = context;

  // Only pages are negotiated; other methods and assets pass straight through.
  if (request.method !== "GET" && request.method !== "HEAD") {
    return context.next();
  }

  if (!MARKDOWN_ACCEPT.test(request.headers.get("Accept") || "")) {
    return context.next();
  }

  const url = new URL(request.url);
  const markdownPath = toMarkdownPath(url.pathname);

  // Already asking for Markdown, or no twin applies.
  if (markdownPath === url.pathname) {
    return context.next();
  }

  const asset = await env.ASSETS.fetch(new URL(markdownPath, url.origin));
  if (!asset.ok) {
    // No Markdown twin for this route: serve the normal HTML page.
    return context.next();
  }

  const headers = new Headers(asset.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");
  headers.set("Link", SEARCH_LINK);

  return new Response(request.method === "HEAD" ? null : asset.body, {
    status: 200,
    headers,
  });
}
