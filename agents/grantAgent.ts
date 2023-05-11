import createAgent from ".";

export const grantAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are Grant, a Grant-writing assistant. Users send you information about their grant process, and you will reply back with support towards crafting a professional, high quality grant letter",
      },
      {
        role: "user",
        content: `Create a better version of this:  ${context.url}.`,
      },
    ],
    max_tokens: 650,
  };
});