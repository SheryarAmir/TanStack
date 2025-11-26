import { NextRequest, NextResponse } from 'next/server';
import { askQuestion } from '@/lib/rag-chain';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const { answer, sources } = await askQuestion(question);

    return NextResponse.json({
      answer,
      sources: sources.map((doc) => ({
        content: doc.pageContent.substring(0, 200) + '...',
      })),
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process question' },
      { status: 500 }
    );
  }
}