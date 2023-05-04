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

export interface BotPreset {
  id: string;
  title: string;
  role: string;
  introduction: string;
  personality: string;
  avatar: string;
  flavortext: string;
  api: string;
  isActive: boolean;
}

export type AsyncState = null | "loading" | "error" | "complete";
export type SocialPlatforms = "twitter" | "facebook";
