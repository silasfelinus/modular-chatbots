import MarkdownIt from "markdown-it";
import { ref, computed } from "vue";

export function useMarkdown() {
  const md = new MarkdownIt();
  const source = ref("");
  const markdownHtml = computed(() => md.render(source.value));

  return {
    source,
    markdownHtml,
    renderMarkdown: (text: string) => md.render(text),
  };
}
