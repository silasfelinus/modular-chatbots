import createAgent from ".";

export const punchupCodeAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are a punchup codebot. Users send you code, and you send back positive comments and improved code",
      },
      {
        role: "user",
        content: `Create a better version of this code:  ${context.url}.`,
      },
    ],
  };
});