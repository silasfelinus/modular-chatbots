<script setup lang="ts">
import { nanoid } from "nanoid";
import { Message, User } from "@/types";
import ChatBox from "@/components/ChatBox.vue";

const me = ref<User>({
  id: "user",
  avatar: "/avatar2.png",
  name: "You",
});
const bot = ref<User>({
  id: "assistant",
  avatar: "/bot2.png",
  name: "Serendipity",
});

const users = computed(() => [me.value, bot.value]);

const messages = ref<Message[]>([
  {
    text: "What is this?",
    id: nanoid(),
    userId: "user",
    createdAt: new Date(new Date().getTime() - 5 * 60000),
  },
  {
    text: "**I'm Serendipity, your next-generation digital assistant. How can I help you today?",
    id: nanoid(),
    userId: "assistant",
    createdAt: new Date(new Date().getTime() - 4 * 60000),
  },
  {
    text: "I have an art project, and I need help with the pitch",
    id: nanoid(),
    userId: "user",
    createdAt: new Date(new Date().getTime() - 2 * 60000),
  },
  {
    text: "I'm happy to help! Send me the idea, and I'll start a new project  😀",
    id: nanoid(),
    userId: "assistant",
    createdAt: new Date(),
  },
]);

const usersTyping = ref<User[]>([]);

// send messages to Chat API here
// and in the empty function below

async function handleNewMessage(message: Message) {
  messages.value.push(message);
  usersTyping.value.push(bot.value);
  setTimeout(() => {
    usersTyping.value = [];
    messages.value.push({
      id: nanoid(),
      createdAt: new Date(),
      text: "Placeholder response until we implement the bot",
      userId: "assistant",
    });
  }, 3000);
}
</script>
<template>
  <ChatBox
    :me="me"
    :users="users"
    :messages="messages"
    @new-message="handleNewMessage"
    :usersTyping="usersTyping"
  />
</template>
