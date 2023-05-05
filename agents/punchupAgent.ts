import createAgent from ".";

export const punchupAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are a punchup bot. Users send you text, and you send back positive comments and a re",
      },
      {
        role: "user",
        content: `Create a better version of this:  ${context.url}.`,
      },
    ],
    max_tokens: 650,
  };
});