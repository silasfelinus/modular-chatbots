<script setup lang="ts">
import { Message, User } from "~~/types";
import { ref, watch } from "vue";
import { AgentName } from "~~/types";

const currentAgent = ref<AgentName | null>(null);

watch(currentAgent, (newAgent) => {
  if (newAgent) {
    bot.value.name = newAgent;
  }
});

const me = ref<User>({
  id: "user",
  avatar: "/avatar2.png",
  name: "You",
});
const bot = ref<User>({ id: "assistant", avatar: "/cassandra5.png", name: currentAgent.value || "A.M.I." });

const users = computed(() => [me.value, bot.value]);
const messages = ref<Message[]>([]);
const usersTyping = ref<User[]>([]);
const messagesForAPI = computed(() =>
  messages.value.map((m) => ({
    role: m.userId,
    content: m.text,
  }))
);
async function handleNewMessage(message: Message) {
  messages.value.push(message);
  usersTyping.value.push(bot.value);
  const res = await $fetch("/api/donate", {
    method: "POST",
    body: {
      agent: currentAgent.value,
      messages: messagesForAPI.value,
    },
  });
  if (!res.choices[0].message?.content) return;
  const msg = {
    id: res.id,
    userId: bot.value.id,
    createdAt: new Date(),
    text: res.choices[0].message?.content,
  };
  messages.value.push(msg);
  usersTyping.value = [];
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