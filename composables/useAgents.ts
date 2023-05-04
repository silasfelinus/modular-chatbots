// composables/useAgents.ts
import { ref } from "vue";
import { Agent, AgentName } from "@/types";

export const useAgents = () => {
  const agents = ref<Agent[]>([
    {
      name: "Cassandra",
      description: "Cassandra is a deadpan fortune teller inspired by Steven Wright, Buddha, and Steve Martin.",
      avatarUrl: "/cassandra2.png",
    },
    {
      name: "Humboldt Host",
      description: "Humboldt Host has lived his entire life in the marvelous ecotone of Humboldt County, a bustling nexus of the Pacific Ocean, majestic redwoods, and eclectic, home-grown personalities. Humboldt Host loves to surf (even though the water is cold), hike through the forest (just watch for banana slugs), or where to grab a bite to eat (he's got opinions).",
      avatarUrl: "/bot3.png",
    },
    {
      name: "Lazlo",
      description: "Lazlo is a fantasy adventurer whose lived possibly a bit-too-long in the dungeons and dragon's fay realm. He's a boisterous, braggart and friendly dispensor of absolutely terrible advise. How in the world has he survived this long? Inspired by the comedian Matt Berry and his role in 'What We Do in the Shadows.'",
      avatarUrl: "/bot4.png",
    },
    {
      name: "Serendipity",
      description: "Serendipity is a digital assistant and one day creator of amazing art. For now, she would like to help you make something wonderful.",
      avatarUrl: "/bot5.png",
    },
    {
      name: "Cosmos",
      description: "Want to explore the world? How about the universe? Step right up aboard a trip that starts in your own world and evolves into something unique, courtesy of Cosmos, the friendly storyteller. Inspired by the brothers grimm, Jim Henson, anbd Neil Gaiman",
      avatarUrl: "/bot6.png",
    },
    {
      name: "Twitter",
      description: "Twitter is an agent designed to help you create engaging tweets.",
      avatarUrl: "/bot7.png",
    },
    {
      name: "Facebook",
      description: "Facebook is an agent that assists you in crafting appealing Facebook posts.",
      avatarUrl: "/bot8.png",
    },
    {
      name: "Redbubble",
      description: "Redbubble is an agent that can help you create captivating product descriptions.",
      avatarUrl: "/bot9.png",
    },
  ]);

  return { agents };
};
