// ai.post.ts
import { Configuration, OpenAIApi } from "openai";
import { agents, amiAgent, cassandraAgent, cosmosAgent, facebookAgent, humboldtAgent, lazloAgent, twitterAgent, punchupAgent, punchupCodeAgent, redbubbleAgent, serendipityAgent, turingAgent } from "@/agents";

function getAgentTraining(agentPersonality: string) {
  const agent = agents.find(agent => agent.personality === agentPersonality);
  if (!agent) {
    throw new Error(`Agent with personality ${agentPersonality} does not exist`);
  }

  const trainingKey = `${agentPersonality}Agent`;
  const trainings = { amiAgent, cassandraAgent, cosmosAgent, facebookAgent, humboldtAgent, lazloAgent, twitterAgent, punchupAgent, punchupCodeAgent, redbubbleAgent, serendipityAgent, turingAgent };
  const training = trainings[trainingKey as keyof typeof trainings];
  if (!training) {
    throw new Error(`Training for agent ${trainingKey} does not exist`);
  }

  return training;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { OPENAI_API_KEY } = useRuntimeConfig();

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const training = getAgentTraining(body.agent);

  const { data } = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [],
    temperature: body.temperature || 1,
    ...training(body),
  });
  return data;
});
