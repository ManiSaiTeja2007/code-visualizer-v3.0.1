// src/lib/parsers/treeSitterInit.ts
import Parser from 'web-tree-sitter';

export async function initParser() {
  await Parser.init();
  return new Parser();
}