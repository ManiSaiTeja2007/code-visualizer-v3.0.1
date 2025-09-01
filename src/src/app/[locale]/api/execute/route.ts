// src/app/api/execute/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { multiFileResolver } from '@/lib/multiFileResolver';
import Logging from '@/lib/Logging';

export async function POST(req: NextRequest) {
  try {
    const { code, lang, files } = await req.json();
    const resolvedCode = multiFileResolver(code, files, lang);
    const result = { trace: [], variables: {} }; // Stub
    Logging.info(`Executed ${lang}`);
    return NextResponse.json(result);
  } catch (error) {
    Logging.error(`Execution error: ${error.message}`);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}