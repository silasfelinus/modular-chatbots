<template>
  <div class="chat-box">
    <div class="message-list" ref="messageList">
      <div v-for="message in messages" :key="message.id" :class="messageClass(message)">
        <img :src="userById(message.userId).avatar" alt="Avatar" />
        <div class="message-content">
          <strong>{{ userById(message.userId).name }}</strong>
          <div v-html="renderMarkdown(message.text)" class="message-text"></div>
          <span class="message-timestamp">{{ formatRelativeTime(message.createdAt) }}</span>
        </div>
      </div>
      <div v-for="user in usersTyping" :key="user.id" class="message-received">
        <img :src="user.avatar" alt="Avatar" />
        <div class="message-content">
          <strong>{{ user.name }}</strong>
          <div class="typing-indicator"><div></div><div></div><div></div></div>
        </div>
      </div>
    </div>
    <div class="input-wrapper">
      <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type your message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";
import { Message, User } from "@/types";
import { useMarkdown } from "@/composables/useMarkdown";
import { useRelativeTime } from "@/composables/useRelativeTime";

interface Props {
  messages: Message[];
  users: User[];
  me: User;
  usersTyping?: User[];
}

const props = defineProps<Props>({
  messages: Array as unknown as () => Message[],
  users: Array as unknown as () => User[],
  me: Object as unknown as () => User,
  usersTyping: { type: Array as unknown as () => User[], default: () => [] },
});

const emit = defineEmit(["new-message"]);

const newMessage = ref("");
const messageList = ref<HTMLElement | null>(null);
const { renderMarkdown } = useMarkdown();
const { formatRelativeTime } = useRelativeTime();

watch(
  () => [newMessage.value, messageList.value],
  async () => {
    await nextTick();
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight;
    }
  },
  { deep: true }
);

onMounted(() => {
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  }
});

function userById(id: string) {
  return props.users.find((user) => user.id === id) || { name: "Unknown", avatar: "/default-avatar.jpg" };
}

function messageClass(message: Message) {
  return { "message-sent": message.userId === props.me.id, "message-received": message.userId !== props.me.id };
}

function sendMessage() {
  if (newMessage.value.trim() === "") return;
  emit("new-message", {
    text: newMessage.value.trim(),
    id: Date.now().toString(),
    userId: props.me.id,
    createdAt: new Date(),
  });
  newMessage.value = "";
}
</script>