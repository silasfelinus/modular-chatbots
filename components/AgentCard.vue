<template>
  <div class="agent-card" @click="select">
    <div class="flex items-center">
      <img :src="agent.avatarUrl" :alt="agent.name" class="agent-card__avatar w-20 h-20 rounded-full" />
      <div class="agent-card__content ml-4">
        <h2 class="agent-card__name text-2xl">{{ agent.name }}</h2>
        <p class="agent-card__description text-base text-gray-500">{{ agent.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Agent } from '@/types';
import { useAppStore } from '@/store';

const props = defineProps({
  agent: {
    type: Object as () => Agent,
    default: () => ({}),
  },
});

const store = useAppStore();

function select() {
  store.setSelectedAgent(props.agent);
  store.toggleChatWidgetOpen();
}
</script>

<style scoped>
.agent-card {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.agent-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.agent-card__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.agent-card__name {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 5px;
}

.agent-card__description {
  font-size: 1em;
  color: #777;
}
</style>
