<script setup lang="ts">
import { nextTick, computed } from 'vue';
import { useChatAi } from '../composables/useChatAi';
import useClipboard from 'vue-clipboard3';

const props = defineProps<{
  url: string;
  temperature: number;
}>();

const { chat, state, firstMessage } = useChatAi({ agent: "Facebook" });

const generate = () => nextTick(() => chat(props));
defineExpose({ generate });

const { toClipboard } = useClipboard();

const postURL = computed(
  () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.url
    )}`
);

function post() {
  toClipboard(firstMessage.value?.content || "");
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
