<script setup lang="ts">
import { agents } from "@/agents";
import { useAppStore } from "@/store";
import { nextTick, computed } from "vue";
import { useChatAi } from "@/composables/useChatAi";

const props = defineProps<{
  url: string;
  temperature: number;
}>();

const store = useAppStore();
const facebookAgent = agents.find((agent) => agent.personality === "facebookAgent");

const { chat, state, firstMessage } = useChatAi();

const generate = () => {
  if (facebookAgent) {
    store.setSelectedAgent(facebookAgent);
  }
  nextTick(() => chat(props));
};

defineExpose({ generate });

const { copy } = useClipboard();

const postURL = computed(
  () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.url
    )}`
);

function post() {
  copy(firstMessage.value?.content || "");
  setTimeout(() => {
    window.open(postURL.value, "_blank");
  }, 500);
}
</script>
