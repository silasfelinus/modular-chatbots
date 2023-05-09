// composables/useAgent.ts
import { computed, ComputedRef } from 'vue';

interface UseAgentReturnType {
  avatarBubbleSize: ComputedRef<string>;
  titleSize: ComputedRef<string>;
  textWindowSize: ComputedRef<string>;
}

export function useAgent(agentType: string): UseAgentReturnType {
  const small = 30;
  const medium = 50;
  const large = 70;
  const xlarge = 90;

  const avatarBubbleSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${medium}px`;
      case 'codewall':
        return `${small}px`;
      case 'donation':
        return `${large}px`;
      case 'image':
        return `${medium}px`;
      case 'chatbot':
        return `${medium}px`;
      case 'storyteller':
        return `${medium}px`;
      default:
        return `${medium}px`;
    }
  });

  const titleSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${large}px`;
      case 'codewall':
        return `${medium}px`;
      case 'donation':
        return `${xlarge}px`;
      case 'image':
        return `${large}px`;
      case 'chatbot':
        return `${medium}px`;
      case 'storyteller':
        return `${large}px`;
      default:
        return `${medium}px`;
    }
  });

  const textWindowSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${large}px`;
      case 'codewall':
        return `${medium}px`;
      case 'donation':
        return `${xlarge}px`;
      case 'image':
        return `${large}px`;
      case 'chatbot':
        return `${medium}px`;
      case 'storyteller':
        return `${large}px`;
      default:
        return `${medium}px`;
    }
  });

  return {
    avatarBubbleSize,
    titleSize,
    textWindowSize,
  };
}
