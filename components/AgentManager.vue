<template>
  <div class="agent-manager">
    <h1 class="text-3xl mb-6">Agent Manager</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <agent-card
        v-for="agent in agents"
        :key="agent.name"
        :agent="agent.name"
        :avatarUrl="agent.avatarUrl"
        :description="agent.description"
      ></agent-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AgentCard from "./AgentCard.vue";
import { useAgents } from "../composables/useAgents";

export default defineComponent({
  components: {
    AgentCard,
  },
  setup() {
    const { agents } = useAgents();

    return {
      agents,
    };
  },
});
</script>
