<template>
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
      <div
        v-if="isOpen"
        :style="`width: ${chatBoxWidth}px;`"
        class="chat-widget max-h-full rounded-xl shadow-lg flex flex-col gap-4 p-4 bg-white overflow-y-auto"
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
        <chat-box class="chat-widget__chat-box flex-grow rounded-xl p-4 bg-gray-100" />
      </div>
    </transition>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import ChatBox from './ChatBox.vue';
import { useAppStore } from '@/store';
import { useAgent } from '@/composables/useAgent';
import { useBreakpoints } from '@/composables/useBreakpoints';

const store = useAppStore();
const { selectedAgent } = store;
const agentFormat = selectedAgent.value ? selectedAgent.value.format : '';
const { avatarBubbleSize, titleSize, textWindowSize } = useAgent(agentFormat);

const chatBoxWidth = computed(() => parseInt(textWindowSize.value) * 10);
const chatBoxHeight = computed(() => (parseInt(textWindowSize.value) * 10) * 0.9);
const avatarSize = computed(() => parseInt(avatarBubbleSize.value) * 10);
const titleFontSize = computed(() => parseInt(titleSize.value) * 2);

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
</style>
