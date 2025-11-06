
import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import { Document } from "langchain/document";
//In LangChain, a Document is just a small container for text (and optional metadata).We’ll put our custom knowledge ("KMT stands for Kohminds Technologies") into a Document.
import { ChatPromptTemplate } from "@langchain/core/prompts";
//which lets us create a structured prompt with placeholders like {context} and {input}. Instead of manually writing strings, we can define templates that LangChain will fill in.
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
//“Stuffing” means: take all your documents, shove them into the prompt context, and send it to the model.This is the simplest form of RAG (Retrieval-Augmented Generation).

// 1. Setup LLM
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
});

// 2. Our knowledge source
const docs = [
  new Document({
    pageContent: "KMT stands for Kohminds Technologies",
  }),
];

// 3. Prompt template (strict use of context) nothing else
const prompt = ChatPromptTemplate.fromTemplate(`  
You are a helpful assistant. ONLY use the context below to answer.
Context:{context}
Question: {input}
`);

// 4. Create chain and sent to the llm
const chain = await createStuffDocumentsChain({
  llm,
  prompt,
});

// 5. Question
const question = "What does KMT stand for?";

console.log("\n=========== ALERT =======");
console.log(" Question:", question);

// 6. Pass BOTH question and documents correctly
const answer = await chain.invoke({
  input: question,
  context: docs,

  //input → user’s question goes into {input} in the prompt.

  // documents → docs are automatically stuffed into {context}.

  //  The chain sends everything to the LLM, gets an answer back.
});

// 7. Print answer
console.log("Answer:", answer);
