<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-wrap items-start justify-center p-10 gap-4">
    <div
      v-for="(agent, index) in agents"
      :key="agent.name"
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs cursor-pointer"
      @click="selectAgent(index)"
    >
      <div class="flex items-center justify-center mb-4">
        <img :src="agent.avatarUrl" class="h-24 w-24 rounded-full" :alt="agent.description" />
      </div>
      <h2 class="text-xl font-bold mb-2">{{ agent.description }}</h2>
      <p class="text-gray-600">{{ agent.description }}</p>
      <div v-if="selectedAgentIndex === index" class="mt-4">
        <router-link :to="`/${agent.name}`" class="text-blue-500">Go to {{ agent.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Agent } from "~~/types";
import { useAgents } from "../composables/useAgents";

const { agents } = useAgents();

const selectedAgentIndex = ref(-1);
const selectAgent = (index: number) => {
  selectedAgentIndex.value = index;
};
</script>
