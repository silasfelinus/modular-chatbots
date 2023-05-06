import { agents, amiAgent, cassandraAgent, cosmosAgent, facebookAgent, humboldtAgent, lazloAgent, twitterAgent, punchupAgent, punchupCodeAgent, redbubbleAgent, serendipityAgent, turingAgent, ottoAgent } from "@/agents";

export function getAgentTraining(agentPersonality: string) {
  const agent = agents.find(agent => agent.personality === agentPersonality);
  if (!agent) {
    throw new Error(`Agent with personality ${agentPersonality} does not exist`);
  }

  const trainingKey = `${agentPersonality}Agent`;
  const trainings = { amiAgent, cassandraAgent, cosmosAgent, facebookAgent, humboldtAgent, lazloAgent, twitterAgent, punchupAgent, punchupCodeAgent, redbubbleAgent, serendipityAgent, turingAgent, ottoAgent };
  const training = trainings[trainingKey as keyof typeof trainings];
  if (!training) {
    throw new Error(`Training for agent ${trainingKey} does not exist`);
  }

  return training;
}
