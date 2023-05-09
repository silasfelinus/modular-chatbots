// src/store.ts
import { ref, readonly } from 'vue';
import type { Agent, Message } from './types';

const defaultAgent: Agent = {
  name: "AMI - The Anti-Malaria Intelligence",
  description: "I'm here to stop the over-sized impact of malaria on this planet.",
  avatarUrl: "/avatar1.jpg",
  intro: "Hi, I'm AMI. How are you doing today?",
  format: "chatbot",
  personality: "amiAgent",
};

const selectedAgent = ref<Agent | null>(defaultAgent);
const messages = ref<Message[]>([]);
const isChatWidgetOpen = ref<boolean>(false);

export interface Store {
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent) => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  isChatWidgetOpen: boolean;
  setIsChatWidgetOpen: (isOpen: boolean) => void;
  toggleChatWidgetOpen: () => void;
}

export function useAppStore() {
  return {
    selectedAgent: readonly(selectedAgent),
    setSelectedAgent(agent: Agent | null) {
      selectedAgent.value = agent;
    },
    messages: readonly(messages),
    addMessage(message: Message) {
      messages.value.push(message);
    },
    isChatWidgetOpen: readonly(isChatWidgetOpen),
    setIsChatWidgetOpen(isOpen: boolean) {
      isChatWidgetOpen.value = isOpen;
    },
    toggleChatWidgetOpen() {
      isChatWidgetOpen.value = !isChatWidgetOpen.value;
    },
  };
}
