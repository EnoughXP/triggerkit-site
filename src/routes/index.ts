import { createHighlighter, type Highlighter } from "shiki";
let highlighter: Highlighter | null = null;
export async function shikiHighlighter(code: string) {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: ["ts", "js", "svelte"],
    });
  }
  return highlighter.codeToHtml(code, {
    lang: "ts",
    themes: {
      dark: "github-dark",
      light: "github-dark",
    },
  });
}
