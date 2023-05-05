// agents/index.ts
export { agents } from "./agentsArray";
export { amiAgent } from "./amiAgent";
export { cassandraAgent } from "./cassandraAgent";
export { cosmosAgent } from "./cosmosAgent";
export { facebookAgent } from "./facebookAgent";
export { humboldtAgent } from "./humboldtAgent";
export { lazloAgent } from "./lazloAgent";
export { twitterAgent } from "./twitterAgent";
export { punchupAgent } from "./punchupAgent";
export { punchupCodeAgent } from "./punchupCodeAgent";
export { redbubbleAgent } from "./redbubbleAgent";
export { serendipityAgent } from "./serendipityAgent";
export { turingAgent } from "./turingAgent";

// util function for creating trainings with proper typing
import type { CreateChatCompletionRequest } from "openai";
export default function createAgent(
  training: (
    context: Record<string, any>
  ) => Partial<CreateChatCompletionRequest>
) {
  return training;
}
import type { Agent } from "../types";
export const defaultAgent: Agent = {
  name: "Default Agent",
  description: "Oh my goodness, get excited, something went wrong.",
  avatarUrl: "/avatar1.jpg",
  intro: "Something went wrong with the code, do you want me to ask chatgpt for help?",
  personality: "Helpful",
};