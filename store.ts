// src/store.ts
import { ref, readonly } from 'vue';
import type { Agent } from './types';
import { defaultAgent } from './agents';

const selectedAgent = ref<Agent | null>(defaultAgent);

export interface Store {
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent) => void;
}

export function useAppStore() {
  return {
    selectedAgent: readonly(selectedAgent),
    setSelectedAgent(agent: Agent | null) {
      selectedAgent.value = agent;
    },
  };
}
