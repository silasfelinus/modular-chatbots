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
import { Agent } from "types";

export default defineComponent({
  components: {
    AgentCard,
  },
  setup() {
    const agents: Agent[] = [
      {
        name: "Cassandra",
        avatarUrl: "/cassandra2.png",
        description: "Cassandra is a fortune teller with a deadpan delivery. Confuscious meets Steven Wright",
      },
      {
        name: "Cosmos",
        avatarUrl: "/bot2.png",
        description: "Explore an alien universe, led by Cosmos, your friendly storyteller.",
      },
      {
        name: "Facebook",
        avatarUrl: "/bot3.png",
        description: "Got something to say but don't know how to say it? Get it primed and ready for publication with one click.",
      },      
      {
        name: "Humboldt Host",
        avatarUrl: "/bot4.png",
        description: "From the Pacific Ocean to the Redwood Forest, Humboldt Host loves to chat about one of the most incredible natural ecotones in the world.",
      },
      {
        name: "Lazlo",
        avatarUrl: "/bot5.png",
        description: "You know what they say about multidimensional travelling. If you remember your trip to the faerie realm, you didn't really visit the faerie realm. Well, Lazlo has been in the fairy realm a loooong time, and he's forgotten more than he can remember!",
      },
      {
        name: "Redbubble",
        avatarUrl: "/bot6.png",
        description: "Need help formatting for redbubble? We have you covered!",
      },

      {
        name: "Serendipity",
        avatarUrl: "/bot7.png",
        description: "Serendipity is here to help you get from idea to completion",
      },      
      {
        name: "Twitter",
        avatarUrl: "/bot8.png",
        description: "Need to say something in the best possible 255 words or less?",
      },
    ];

    return {
      agents,
    };
  },
});
</script>
