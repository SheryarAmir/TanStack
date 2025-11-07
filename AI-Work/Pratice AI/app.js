import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
const loader = new PDFLoader("/path/to/your.pdf");
const docs = await loader.load();  // docs is an array of Document objects, one per page



import { DirectoryLoader } from "@langchain/classic/document_loaders/fs/directory";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
const directoryLoader = new DirectoryLoader(
  "./pdf-folder/",
  { ".pdf": (path: string) => new PDFLoader(path) }
);
const docs = await directoryLoader.load();  // loads all PDFs into docs[]


import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const chunks = await splitter.splitDocuments(docs);

import { OpenAIEmbeddings } from "@langchain/openai";
const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-small" });

import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
const vectorStore = await MemoryVectorStore.fromDocuments(chunks, embeddings);

import { Chroma } from "@langchain/community/vectorstores/chroma";
const chromaStore = new Chroma(embeddings, { collectionName: "pdf-chunks" });
await chromaStore.addDocuments(chunks); 

import { PineconeStore } from "@langchain/pinecone";
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);
const pineconeStore = await PineconeStore.fromExistingIndex(embeddings, { pineconeIndex });
await pineconeStore.addDocuments(chunks);

// e.g., with MemoryVectorStore (or any store that has similaritySearch)
const results = await vectorStore.similaritySearch(question, 3);
// results is an array of Document objects (with pageContent and metadata) most similar to the question.
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

const prompt = ChatPromptTemplate.fromTemplate(`
  You are a helpful assistant. ONLY use the context below to answer.
  Context: {context}
  Question: {input}
`);
const chain = await createStuffDocumentsChain({ llm: new ChatOpenAI(), prompt });
const answer = await chain.invoke({ input: userQuestion, context: retrievedDocs });
