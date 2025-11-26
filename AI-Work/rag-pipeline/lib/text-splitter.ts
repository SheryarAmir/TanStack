// File: lib/text-splitter.ts
// Purpose: Split large text into smaller chunks for better retrieval

import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export async function splitText(text: string) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,        // Each chunk = ~1000 characters
    chunkOverlap: 200,      // Overlap prevents cutting sentences
  });

  return await splitter.createDocuments([text]);
}