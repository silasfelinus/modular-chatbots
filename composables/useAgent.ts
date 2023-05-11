// composables/useAgent.ts
import { computed, ComputedRef } from 'vue';

interface UseAgentReturnType {
  avatarBubbleSize: ComputedRef<string>;
  titleSize: ComputedRef<string>;
  textWindowSize: ComputedRef<string>;
}

export function useAgent(agentType: string): UseAgentReturnType {
  const small = 2;
  const medium = 3;
  const large = 4;
  const xlarge = 5;

  const avatarBubbleSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${medium}vw`;
      case 'codewall':
        return `${small}vw`;
      case 'donation':
        return `${large}vw`;
      case 'image':
        return `${medium}vw`;
      case 'chatbot':
        return `${medium}vw`;
      case 'storyteller':
        return `${medium}vw`;
      default:
        return `${medium}vw`;
    }
  });

  const titleSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${large}vw`;
      case 'codewall':
        return `${medium}vw`;
      case 'donation':
        return `${xlarge}vw`;
      case 'image':
        return `${large}vw`;
      case 'chatbot':
        return `${medium}vw`;
      case 'storyteller':
        return `${large}vw`;
      default:
        return `${medium}vw`;
    }
  });

  const textWindowSize = computed(() => {
    switch (agentType) {
      case 'textwall':
        return `${large}vh`;
      case 'codewall':
        return `${medium}vh`;
      case 'donation':
        return `${xlarge}vh`;
      case 'image':
        return `${large}vh`;
      case 'chatbot':
        return `${medium}vh`;
      case 'storyteller':
        return `${large}vh`;
      default:
        return `${medium}vh`;
    }
  });

  return {
    avatarBubbleSize,
    titleSize,
    textWindowSize,
  };
}
