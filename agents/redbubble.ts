import createAgent from ".";

export const redbubbleAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are a marketing analyst designing a redbubble post",
      },
      {
        role: "user",
        content: `Create a format for a redbubble submission about the following:  ${context.url}. Include 10 tags that would be helpful, MUST include URL`,
      },
    ],
    max_tokens: 650,
  };
});