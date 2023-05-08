<script setup lang="ts">
import { nanoid } from "nanoid";
import { Message, User } from "~~/types";
import { useAppStore } from "../store";
import { watch, ref } from "vue";

const store = useAppStore();
const chatBoxOpen = ref(false);

watch(() => store.selectedAgent.value, () => {
  if (!chatBoxOpen.value) {
    chatBoxOpen.value = true;
  }
});

const props = withDefaults(
  defineProps<{
    messages: Message[];
    users: User[];
    me: User;
    usersTyping?: User[];
  }>(),
  {
    usersTyping: () => [],
  }
);

defineEmits<{
  (e: "newMessage", payload: Message): void;
}>();

function getUser(id: string) {
  return props.users.find((user) => user.id === id);
}

const input = ref();
watch(chatBoxOpen, () => {
  if (!chatBoxOpen.value) return;
  nextTick(() => {
    (input.value as HTMLInputElement).focus();
  });
});

const messageBox = ref();
watch(
  () => props.messages,
  () => {
    nextTick(
      () => (messageBox.value.scrollTop = messageBox.value.scrollHeight)
    );
  },
  { deep: true }
);
</script>

<template>
  <div class="fixed bottom-2 right-2">
    <button
      v-show="!chatBoxOpen"
      @click="chatBoxOpen = true"
      class="btn btn-primary"
      data-test="chat-widget-trigger"
    >
      <IconChat class="h-8 w-8" />
    </button>
    <div
      v-if="chatBoxOpen"
      data-test="chat-widget-content"
      class="card w-[450px] h-[75vh] shadow-2xl rounded-lg overflow-hidden"
    >
    <header class="card-header flex flex-col items-center relative">
  <h2 class="card-title mb-2">{{ store.selectedAgent.value?.name }}</h2>
  <img
    :src="store.selectedAgent.value?.avatarUrl"
    alt=""
    class="w-full h-[90%] object-cover mb-2 rounded-md shadow-lg"
  />
  <button class="btn btn-ghost absolute top-2 right-2" @click="chatBoxOpen = false">
    <IconX class="h-6 w-6" />
  </button>
</header>
      <div class="card-body p-4 overflow-y-scroll" ref="messageBox">
        <div v-if="!props.messages.length" class="text-center w-[350px] m-auto">
          <strong class="text-lg text-blue-600">
            Hi, I'm {{ store.selectedAgent.value?.name }}
          </strong>
          <ul class="list-disc list-inside text-left mt-10">
            <p>{{ store.selectedAgent.value?.intro }}</p>
          </ul>
        </div>
        <ChatBubble
          data-test="chat-bubble"
          v-for="message in messages"
          :key="message.id"
          :message="message"
          :user="getUser(message.userId)"
          :my-message="message.userId === me.id"
        />
        <ChatBubble v-for="user in usersTyping" :key="user.id" :user="user">
          <AppLoading />
        </ChatBubble>
      </div>
      <footer class="card-footer">
        <input
          data-test="chat-input"
          ref="input"
          class="input w-full px-2 py-1 block bg-white text-black rounded"
          type="text"
          placeholder="Type your message"
          @keypress.enter.exact="
            $emit('newMessage', {
              id: nanoid(),
              userId: me.id,
              createdAt: new Date(),
              text: ($event.target as HTMLInputElement).value,
            });
            ($event.target as HTMLInputElement).value = '';
          "
        />

        <div class="h-6 py-1 px-2 text-sm italic">
          <span v-if="usersTyping.length">
            {{ usersTyping.map((user) => user.name).join(" and ") }}
            {{ usersTyping.length === 1 ? "is" : "are" }} typing
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>