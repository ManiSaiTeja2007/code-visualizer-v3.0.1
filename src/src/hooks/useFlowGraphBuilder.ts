// src/hooks/useFlowGraphBuilder.ts
import { useMemo } from 'react';

export function useFlowGraphBuilder(ast: any) {
  return useMemo(() => {
    // O(n) build
    return { nodes: [], edges: [] };
  }, [ast]);
}