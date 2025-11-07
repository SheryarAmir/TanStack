// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  OPENAI_API_KEY,
} = process.env;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY! });
const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!);
const db = client.db(ASTRA_DB_API_ENDPOINT!, { namespace: ASTRA_DB_NAMESPACE });
const collection = db.collection(ASTRA_DB_COLLECTION!);

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    // 1️⃣ Embed user message
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
      encoding_format: "float",
    });

    const vector = embedding.data[0].embedding;

    // 2️⃣ Query Astra DB for similar chunks
    const docs = await collection.find(
      {},
      {
        sort: { $vector: vector },
        limit: 5,
      }
    );

    const context = docs.map((doc: any) => doc.text).join("\n\n---\n\n");

    // 3️⃣ Generate answer using context
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that answers based on Formula 1 Wikipedia data.",
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion: ${message}`,
        },
      ],
    });

    const reply = completion.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
