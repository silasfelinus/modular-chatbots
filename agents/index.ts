// register all training files here
export * from "./cassandra";
export * from "./humboldthost";
export * from "./lazlo";
export * from "./serendipity";
export * from "./cosmos";
export * from "./twitter";
export * from "./facebook";
export * from "@/agents/redbubble";

// and register types here
export type Agent = "Cassandra" | "Humboldt Host" | "Lazlo"| "Serendipity"| "Cosmos"|"Twitter"|"Facebook"|"Redbubble";

// util function for creating trainings with proper typing
import type { CreateChatCompletionRequest } from "openai";
export default function createAgent(
  training: (
    context: Record<string, any>
  ) => Partial<CreateChatCompletionRequest>
) {
  return training;
}