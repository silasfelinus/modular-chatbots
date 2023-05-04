// register all training files here
export * from "./cassandraAgent";
export * from "./humboldtAgent";
export * from "./lazloAgent";
export * from "./serendipityAgent";
export * from "./cosmosAgent";
export * from "./twitterAgent";
export * from "./facebookAgent";
export * from "./redbubbleAgent";

// util function for creating trainings with proper typing
import type { CreateChatCompletionRequest } from "openai";
export default function createAgent(
  training: (
    context: Record<string, any>
  ) => Partial<CreateChatCompletionRequest>
) {
  return training;
}