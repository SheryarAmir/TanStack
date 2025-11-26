import { OpenAIEmbeddings } from '@langchain/openai';

export function getEmbeddingsModel() {
  return new OpenAIEmbeddings({
    modelName: 'text-embedding-3-small',
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
}