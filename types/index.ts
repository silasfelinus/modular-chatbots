export interface User {
  id: string;
  avatar: string;
  name: string;
}
export interface Message {
  id: string;
  userId: string;
  createdAt: Date;
  text: string;
}

export type AgentName = "Cassandra" | "Humboldt Host" | "Lazlo" | "Serendipity" | "Cosmos" | "Twitter Bot" | "Facebook Bot" | "Redbubble Bot"|"Donation Bot"|"Punch-Up Bot"|"Punch-Up-Code Bot"|"AMI - Anti-Malaria Intelligence"

export interface Agent {
  name: AgentName;
  description: string;
  avatarUrl: string;
}

export type AsyncState = null | "loading" | "error" | "complete";
export type SocialPlatforms = "twitter" | "facebook";
