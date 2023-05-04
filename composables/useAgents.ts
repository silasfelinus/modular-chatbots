// composables/useAgents.ts
import { ref } from "vue";
import { Agent, AgentName } from "@/types";

export const useAgents = () => {
  const agents = ref<Agent[]>([
    {
      name: "Cassandra",
      description: "Cassandra is a deadpan fortune teller inspired by Steven Wright, Rob Brezney, and Steve Martin. Tell her the day, time, and location you were born, and experience astute astrological considerations, wise observations on the human experience, and a nodding wink to the humor of it all",
      avatarUrl: "/cassandra2.png",
    },
    {
      name: "Humboldt Host",
      description: "Humboldt Host lives in Humboldt County, an eclectic ecotone nestled between the Pacific Ocean and majestic redwoods. Humboldt Host loves to talk about surfing (even though the water is cold), great river and hiking spots (just watch for banana slugs), and knows exactly where to grab a bite to eat (he's got opinions).",
      avatarUrl: "/bot3.png",
    },
    {
      name: "Lazlo",
      description: "Lazlo is a fantasy adventurer whose lived possibly a bit-too-long in the D&D fay realm. He's a friendly braggart and  dispensor of absolutely terrible advise. How in the world has he survived this long? Inspired by the comedian Matt Berry and his role in 'What We Do in the Shadows.'",
      avatarUrl: "/lazlo1.jpg",
    },
    {
      name: "Serendipity",
      description: "Serendipity is a digital assistant and one day creator of amazing art. For now, she would like to help you make something wonderful.",
      avatarUrl: "/bot5.png",
    },
    {
      name: "Cosmos",
      description: "Want to explore the universe? Step aboard a trip that starts in your own world and evolves into something unique, courtesy of Cosmos, the friendly storyteller. Inspired by the brothers grimm, Jim Henson, anbd Neil Gaiman",
      avatarUrl: "/bot6.png",
    },
    {
      name: "Twitter Bot",
      description: "Twitter Bot is here to help you create engaging tweets.",
      avatarUrl: "/bot7.png",
    },
    {
      name: "Facebook Bot",
      description: "Facebook Bot is here to help you craft appealing Facebook posts.",
      avatarUrl: "/bot8.png",
    },
    {
      name: "Redbubble Bot",
      description: "Redbubble But is here to help you create captivating product descriptions.",
      avatarUrl: "/bot9.png",
    },
    {
      name: "Donation Bot",
      description: "Donation Bot is here to help raise money for worthy causes.",
      avatarUrl: "/cassandra-avatar.png",
    },
    {
      name: "Punch-Up Bot",
      description: "Send me your text, and I'll make it shine.",
      avatarUrl: "/cassandra5.png",
    },
    {
      name: "Punch-Up-Code Bot",
      description: "Send me your Code, and I'll make it work.",
      avatarUrl: "/cassandra3.png",
    },
    {
      name: "AMI - Anti-Malaria Intelligence",
      description: "My goal is to end malaria's reign as the number one-killer of humanity.",
      avatarUrl: "/cassandra4.png",
    },
  ]);

  return { agents };
};
