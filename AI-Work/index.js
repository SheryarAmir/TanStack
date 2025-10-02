import "dotenv/config";
import { openai } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";

// using vercal AI SDK , use the generate text function .
// 01 generateText function
// async function output() {
//   const { text } = await generateText({
//     model: openai("gpt-4o-mini"),
//     prompt: "write a simple sentence ony ?",
//   });

//   console.log("AI Response:\n", text);
// }

// output();

// const Textoutput = async () => {
//   const { text } = await generateText({
//     model: openai("gpt-4o-mini", {
//       apiKey: process.env.OPENAI_API_KEY,
//     }),
//     prompt: "What is the full form of DVD?",
//   });

//   console.log("Answer:", text);
// };

// Textoutput();

// const systemPromptExample = async () => {
//   const result = await generateText({
//     model: openai("gpt-4o"),
//     system: `
// You are a helpful AI. Always reply in valid JSON format.
// The JSON must strictly follow this schema:

// {
//   "answer": "string",
//   "explanation": "string"
// }
//     `,
//     prompt: "What is the full form of DVD?",
//   });

//   console.log("Raw Output:\n", result.text);

//   // You can also parse it if it's strict JSON
//   try {
//     const parsed = JSON.parse(result.text);
//     console.log("\nParsed Output:", parsed);
//   } catch (e) {
//     console.error(" JSON parsing failed", e.message);
//   }
// };

// systemPromptExample();

// const coreMessage = async () => {
//   const result = await generateText({
//     model: openai("gpt-4o"),
//     messages: [
//       // System = rules / behavior
//       coreMessage(
//         "system",
//         "You are a financial advisor. Always answer with clear bullet points."
//       ),

//       // User = first request
//       coreMessage("user", "Can you suggest some safe investment options?"),

//       // Assistant = remembering what it answered before
//       coreMessage(
//         "assistant",
//         "Sure! Some safe options are government bonds, index funds, and high-yield savings accounts."
//       ),

//       // Follow-up user message
//       coreMessage("user", "Great, now compare index funds vs bonds."),
//     ],
//   });

//   console.log("AI Response:\n", result.text);
// };

// coreMessage();

// 02 streaming text

const main = async () => {
  const result = await streamText({
    model: openai("gpt-4o"),
    prompt: "What is the color of the sun?",
  });

  // Print chunks live in the terminal
  for await (const chunk of result.textStream) {
    process.stdout.write(chunk);
  }
};

main();

// 03 system Prompt
// 04 hot swapping modal
