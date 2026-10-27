export const CONTEXT7_ASK_URL =
  "https://context7.com/api/v2/ask?siteKey=ask_bb39d74af636f4d8ca0d98b9";

export const CONTEXT7_SITE_KEY = new URL(CONTEXT7_ASK_URL).searchParams.get("siteKey")!;

export const CONTEXT7_SEARCH_MARKDOWN = `## Search

Page index: https://yokharian.dev/llms.txt. Add .md to any page URL for its Markdown.

This site has a search endpoint: ${CONTEXT7_ASK_URL}&query=<URL-encoded question>. It returns documentation that answers the question, with a source link for each part. No API key is needed. If nothing matches, it says so.

`;
