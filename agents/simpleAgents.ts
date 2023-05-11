// register all training files here
export * from "./customerSupportAgent";
export * from "./facebookAgent";
export * from "./twitterAgent";
export * from "./amiAgent";
export * from "./cassandraAgent";
export * from "./cosmosAgent";
export * from "./facebookAgent";
export * from "./humboldtAgent";
export * from "./lazloAgent";
export * from "./twitterAgent";
export * from "./punchupAgent";
export * from "./punchupCodeAgent";
export * from "./redbubbleAgent";
export * from "./serendipityAgent";
export * from "./turingAgent";
export * from "./ottoAgent";
export * from "./seussAgent";
export * from "./grantAgent";

// and register types here
export type simpleAgent = "facebook" | "twitter" | "customerSupport"| "ami"| "cassandra"| "cosmos"| "humboldt"| "lazlo"| "punchup"| "punchupCode"| "redbubble"| "serendipity"| "turing"| "otto"| "seuss"| "grant";

// util function for creating trainings with proper typing
import type { CreateChatCompletionRequest } from "openai";
export default function createAgent(
  training: (
    context: Record<string, any>
  ) => Partial<CreateChatCompletionRequest>
) {
  return training;
}