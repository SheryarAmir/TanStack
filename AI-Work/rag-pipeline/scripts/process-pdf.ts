// File: scripts/process-pdf.ts
// Purpose: One-time script to process PDF and store embeddings

import { loadPDF } from '../lib/pdf-loader';
import { splitText } from '../lib/text-splitter';
import { storeEmbeddings } from '../lib/vector-store';

async function processPDF() {
  console.log('📄 Loading PDF...');
  const text = await loadPDF('data/document.pdf');

  console.log('✂️  Splitting text...');
  const chunks = await splitText(text);

  console.log(`📦 Created ${chunks.length} chunks`);

  console.log('🧠 Generating embeddings and storing...');
  await storeEmbeddings(chunks);

  console.log('✅ Done! Vector database is ready.');
}

processPDF().catch(console.error);
