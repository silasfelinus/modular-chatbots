<template>
  <div class="agent-manager mt-16">
    <h1 class="text-3xl mb-6">Robot Factory</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <agent-card
        v-for="agent in agents"
        :key="agent.name"
        :agent="agent"
        @select="() => selectAgent(agent)"
      ></agent-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import AgentCard from "./AgentCard.vue";
import type { Agent } from '../types';
import { agents } from "../agents";
import { useAppStore } from '../store';

// Use the store
const store = useAppStore();
const { setSelectedAgent } = store;

function selectAgent(agent: Agent) {
  setSelectedAgent(agent);
}

defineComponent({
  components: {
    AgentCard,
  },
});
</script>
