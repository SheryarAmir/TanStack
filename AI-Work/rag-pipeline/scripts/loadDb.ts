import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from "langchain/document_loders/web/puppeteer";
import openAI from "openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import "dotenv/config";
type SimilarityMetric = "dot_product" | "consine" | "euclidean";
const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  OPENAI_API_KEY,
} = process.env;

const openai = new openAI({
  apiKey: OPENAI_API_KEY,
});

const f1Data = ["https://en.wikipedia.org/wiki/Formula_One"];

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);

const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE });

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 512,
  chunkOverlap: 100,
});

const createCollection = async (
  SimilarityMetric: SimilarityMetric = "dot_product"
) => {
  const res = await db.createCollection(ASTRA_DB_COLLECTION, {
    vector: {
      dimension: 1536,
      metric: SimilarityMetric,
    },
  });

  console.log(res);
};

const loadSampleData = async () => {
  const collection = await db.collection(ASTRA_DB_COLLECTION);

  for await (const url of f1Data) {
    const content = await scrapePage(url);
    const chunks = await splitter.splitterText(content);

    for await (const chunk of chunks) {
      const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: "chunk",
        encoding_format: "float",
      });

      const  vector= embedding.data[0].embedding

      const res=await.collection.insertOne({
        $vector:vector,
        text:chunk
      })
console.log(res)
      
    }
  }
};



const scrapePage = async (url:string)=>{

     const loader= new PuppeteerWebBaseLoader(url, {
        lunchOption:{
            headless:true
        },

        gotoOptions:{
            waitUntil:"D"
        }
     })

}