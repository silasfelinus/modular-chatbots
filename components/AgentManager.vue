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
        @select="() => selectAgent(agent.name)"
      ></agent-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits } from "vue";
import AgentCard from "./AgentCard.vue";
import { useAgents } from "../composables/useAgents";

const currentAgent = ref(null);

const emit = defineEmits(["select-agent"]);


function selectAgent(agentName: string) {
  emit('select-agent', agentName);
}

export default defineComponent({
  components: {
    AgentCard,
  },
  setup() {
    const { agents } = useAgents();

    return {
      agents,
      selectAgent,
    };
  },
});
</script>
