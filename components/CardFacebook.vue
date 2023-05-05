<script setup lang="ts">
import { agents } from "../agents";
import { Agent} from "../types";
import { ref } from 'vue';

const props = defineProps<{
  url: string;
  temperature: number;
}>();

const defaultAgent: Agent = {
  name: "",
  description: "",
  avatarUrl: "",
  intro: "",
  personality: "",
};

const agentRef = ref(agents.find((agent) => agent.personality === "facebookAgent") || defaultAgent);
const { chat, state, firstMessage } = useChatAi({ agent: agentRef });

const generate = () => nextTick(() => chat(props));
defineExpose({ generate });

const { copy } = useClipboard();

const postURL = computed(
  () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.url
    )}`
);

/**
 * We cannot pass the text to the facebook post
 * Thus we'll open the facebook share tab
 * and copy the text to the clipboard to make it easy to add to the post
 */
function post() {
  copy(firstMessage.value?.content || "");
  setTimeout(() => {
    window.open(postURL.value, "_blank");
  }, 500);
}
</script>
<template>
  <CardGeneric
    :state="state"
    title="Facebook"
    :body="firstMessage?.content.trim()"
    @update:body="firstMessage ? (firstMessage.content = $event) : null"
  >
    <div v-if="firstMessage?.content.trim()">
      <button class="btn btn-neutral" @click="generate()">Regenerate</button>
      <a :href="postURL" class="btn btn-primary" @click.prevent="post()">
        Copy Text and Open Facebook
      </a>
    </div>
  </CardGeneric>
</template>
