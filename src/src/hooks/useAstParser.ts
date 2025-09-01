// src/hooks/useAstParser.ts
import Parser from 'tree-sitter';
import { useMemo } from 'react';

export function useAstParser(lang: string, code: string) {
  const parser = useMemo(() => new Parser(), []);
  // Parse in worker if large
  return { ast: parser.parse(code) };
}