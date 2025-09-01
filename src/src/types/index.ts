// src/types/index.ts
export interface ExecutionTrace {
  steps: number[];
  variables: Record<string, any[]>;
}

export interface GraphNode {
  id: string;
  type: 'file' | 'function';
  data: { label: string };
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
}