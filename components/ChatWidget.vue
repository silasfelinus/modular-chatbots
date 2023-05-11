<template>
  <!-- Add a dynamic class to the chat-widget div -->
  <div
    :class="{
      'fixed bottom-4 right-4': isSmallScreen,
      'relative': !isSmallScreen
    }"
  >
    <div v-if="!isOpen" @click="toggleOpen" class="p-4 bg-primary rounded-full">
      <img
        :src="selectedAgent?.avatarUrl"
        :alt="selectedAgent?.name"
        class="w-12 h-12 rounded-full object-cover"
      />
    </div>
    <transition name="slide-fade">
      <!-- Add a dynamic class to the chat-widget based on the selected agent's format -->
      <div
        v-if="isOpen"
        :style="`width: ${chatBoxWidth}px;`"
        class="chat-widget max-h-full rounded-xl shadow-lg flex flex-col gap-4 p-4 bg-white overflow-y-auto"
        :class="selectedAgent?.format"
        @click.self="toggleOpen"
      >
        <img
          :src="selectedAgent?.avatarUrl"
          :alt="selectedAgent?.name"
          class="w-16 h-16 rounded-full object-cover self-center"
        />
        <div
          class="chat-widget__header text-center font-bold"
          :style="`font-size: ${titleFontSize}px;`"
        >
          {{ selectedAgent?.name }}
        </div>
        <div class="chat-widget__intro text-gray-600 text-center">
          {{ selectedAgent?.intro }}
        </div>
        <div
      v-if="selectedAgent?.format === 'chatbot'"
      class="under-repairs text-red-500 text-center mt-2 mb-4"
      :style="`font-size: ${titleFontSize}px;`"
    >
      Apologies! Chat is currently under repairs.
    </div>
        <chat-box class="chat-widget__chat-box flex-grow rounded-xl p-4 bg-gray-100" />
        <!-- Add a close button -->
        <button
          class="chat-widget__close-btn absolute top-4 right-4 text-gray-700"
          @click="toggleOpen"
        >
          X
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ChatBox from './ChatBox.vue';
import { useAppStore } from '@/store';
import { useAgent } from '@/composables/useAgent';
import { useBreakpoints } from '@/composables/useBreakpoints';

const store = useAppStore();
const { selectedAgent } = store;
const agentFormat = ref(selectedAgent.value ? selectedAgent.value.format : '');
const agentStyles = useAgent(agentFormat.value);

const avatarBubbleSize = ref(agentStyles.avatarBubbleSize.value);
const titleSize = ref(agentStyles.titleSize.value);
const textWindowSize = ref(agentStyles.textWindowSize.value);

// Update agentFormat and styles when selectedAgent changes
watch(selectedAgent, (newAgent) => {
  agentFormat.value = newAgent ? newAgent.format : '';
  const newAgentStyles = useAgent(agentFormat.value);
  avatarBubbleSize.value = newAgentStyles.avatarBubbleSize.value;
  titleSize.value = newAgentStyles.titleSize.value;
  textWindowSize.value = newAgentStyles.textWindowSize.value;
});

const chatBoxWidth = computed(() => parseFloat(textWindowSize.value) * 10 + 'vw');
const chatBoxHeight = computed(() => (parseFloat(textWindowSize.value) * 10) * 0.9 + 'vh');
const avatarSize = computed(() => parseFloat(avatarBubbleSize.value) * 10 + 'vw');
const titleFontSize = computed(() => parseFloat(titleSize.value) * 2 + 'vw');

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const { isSmallScreen } = useBreakpoints();

import { defineComponent } from 'vue';
defineComponent({
  components: {
    ChatBox,
  },
});
</script>





<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.bg-primary {
  background-color: #1f2937;
}
@media (max-width: 640px) {
  .chat-widget {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
