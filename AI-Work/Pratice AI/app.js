import "dotenv/config";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { MemoryVectorStore } from "@langchain/community/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

// 1 Load your local PDF (place "myfile.pdf" in the same folder)
const loader = new PDFLoader("./myfile.pdf");
const pdfDocs = await loader.load();
console.log(` Loaded ${pdfDocs.length} pages from PDF`);

// 2 Embed documents using OpenAI embeddings
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
});
const vectorStore = await MemoryVectorStore.fromDocuments(pdfDocs, embeddings);
console.log(" PDF embedded into in-memory vector store");

// 3 Create a retriever (fetches the top-k relevant chunks)
const retriever = vectorStore.asRetriever({
  k: 3, // number of chunks to retrieve
});

// 4 Define a context-aware prompt
const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful assistant. Use ONLY the provided context to answer.
If the answer isn't in the context, reply: "The document does not mention that."

Context:
{context}

Question:
{input}
`);

// 5️⃣ Initialize the LLM and combine the chains
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
});
const combineChain = await createStuffDocumentsChain({
  llm,
  prompt,
});
const chain = await createRetrievalChain({
  retriever,
  combineDocumentsChain: combineChain,
});

// 6️⃣ Ask a question about your PDF
const question = "What is the main topic of this document?";
console.log("\n=========== QUESTION =======");
console.log(">", question);

const answer = await chain.invoke({ input: question });

console.log("\n=========== ANSWER =======");
console.log(answer);
