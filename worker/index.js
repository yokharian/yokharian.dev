// Cloudflare Worker in front of the static assets in ./dist.
//
// Two responsibilities:
//  1. Serve the static site (assets binding, with `_headers` / `_redirects`
//     rules applied by Workers).
//  2. Content negotiation for AI agents: a request carrying
//     `Accept: text/markdown` gets the matching `<path>.md` twin produced by
//     the build-time `*.md.ts` endpoints, with `Content-Type: text/markdown`.
//
// Host-level rewrites cannot do this (the CDN never matches on `Accept`), so
// it has to happen in code. `assets.run_worker_first` is what guarantees this
// script sees HTML routes at all.

const SEARCH_LINK =
  '<https://context7.com/api/v2/ask?siteKey=ask_bb39d74af636f4d8ca0d98b9>; rel="search"; type="text/plain"; title="Search yokharian.dev"';

// Headers from public/_headers are only applied to asset responses, never to
// responses this Worker builds itself, so mirror the important ones here.
const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

// "text/markdown", "text/markdown; charset=utf-8", "text/html, text/markdown;q=0.9"
const MARKDOWN_ACCEPT = /(^|[\s,;])text\/markdown\b/i;

/**
 * Map a page path to its Markdown twin.
 * "/" -> "/index.md", "/about" -> "/about.md", "/tags/ai/" -> "/tags/ai.md"
 */
function toMarkdownPath(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/index.md" : `${trimmed}.md`;
}

function markdownResponse(asset, isHead) {
  const headers = new Headers(asset.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");
  headers.set("Link", SEARCH_LINK);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  return new Response(isHead ? null : asset.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    const isGetOrHead = request.method === "GET" || request.method === "HEAD";
    const url = new URL(request.url);

    // /llms.txt is the site's Markdown index; always serve it as text/markdown.
    if (isGetOrHead && url.pathname === "/llms.txt") {
      const asset = await env.ASSETS.fetch(new URL("/llms.txt", url.origin));
      if (asset.ok) {
        return markdownResponse(asset, request.method === "HEAD");
      }
    }

    if (isGetOrHead && MARKDOWN_ACCEPT.test(request.headers.get("Accept") || "")) {
      const markdownPath = toMarkdownPath(url.pathname);

      // Don't rewrite a request that already targets Markdown.
      if (markdownPath !== url.pathname) {
        const asset = await env.ASSETS.fetch(new URL(markdownPath, url.origin));
        if (asset.ok) {
          return markdownResponse(asset, request.method === "HEAD");
        }
      }
    }

    // Normal request: let Workers serve the asset (applies html_handling,
    // not_found_handling, _headers and _redirects).
    return env.ASSETS.fetch(request);
  },
};
