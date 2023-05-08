<script setup lang="ts">
  import { Message, User, Agent } from "~~/types";
  import { ref, computed } from "vue";
  import { useChatAi } from "@/composables/useChatAi";
  import { useAppStore } from "@/store";

  // Use the store
  const store = useAppStore();

  const me = ref<User>({
    id: "user",
    avatar: "/avatar2.png",
    name: "You",
  });

  const bot = computed(() => ({
    id: "assistant",
    avatar: store.selectedAgent.value?.avatarUrl ?? "/cassandra5.png",
    name: store.selectedAgent.value?.name ?? "A.M.I.",
  }));

  const users = computed(() => [me.value, bot.value]);
  const messages = ref<Message[]>([]);
  const usersTyping = ref<User[]>([]);

  const chatAi = useChatAi();

  async function handleNewMessage(message: Message) {
    messages.value.push(message);
    usersTyping.value.push(bot.value);

    const res = await chatAi.chat({
      messages: messages.value.map((m) => ({
        role: m.userId,
        content: m.text,
      })),
    });

    if (!chatAi.firstMessage.value) return;

    const msg = {
      id: res?.id ?? "",
      userId: bot.value.id,
      createdAt: new Date(),
      text: chatAi.firstMessage.value.content,
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
