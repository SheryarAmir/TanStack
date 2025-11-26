import pdf from 'pdf-parse';
import fs from 'fs/promises';
import path from 'path';

export async function loadPDF(filePath: string): Promise<string> {
  const dataBuffer = await fs.readFile(path.join(process.cwd(), filePath));
  const data = await pdf(dataBuffer);
  return data.text;
}