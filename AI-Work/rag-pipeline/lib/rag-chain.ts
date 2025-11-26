import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { searchSimilarChunks } from './vector-store';

const llm = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0, // More deterministic answers
});

const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful AI assistant. Use ONLY the context below to answer the question.
If the answer is not in the context, say "I don't have enough information."

Context:
{context}

Question: {input}

Answer:
`);

export async function askQuestion(question: string) {
  // 1. Retrieve relevant chunks from vector DB
  const relevantDocs = await searchSimilarChunks(question);

  // 2. Create RAG chain
  const chain = await createStuffDocumentsChain({ llm, prompt });

  // 3. Get answer
  const answer = await chain.invoke({
    input: question,
    context: relevantDocs,
  });

  return { answer, sources: relevantDocs };
}