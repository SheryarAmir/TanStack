// File: lib/vector-store.ts
// Purpose: Store and retrieve embeddings from Pinecone

import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';
import { getEmbeddingsModel } from './embeddings';

export async function initPinecone() {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });

  return pinecone.Index(process.env.PINECONE_INDEX!);
}

export async function storeEmbeddings(docs: any[]) {
  const pineconeIndex = await initPinecone();
  const embeddings = getEmbeddingsModel();

  await PineconeStore.fromDocuments(docs, embeddings, {
    pineconeIndex,
    namespace: 'pdf-knowledge',
  });

  // console.log('✅ Embeddings stored successfully!');
}

export async function searchSimilarChunks(query: string, k = 4) {
  const pineconeIndex = await initPinecone();
  const embeddings = getEmbeddingsModel();

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: 'pdf-knowledge',
  });

  return await vectorStore.similaritySearch(query, k);
}