// src/features/analyzer/components/FlowGraph.tsx
'use client';
import ReactFlow, { Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function FlowGraph({ nodes, edges }: { nodes: any[]; edges: any[] }) {
  return (
    <div style={{ height: '500px' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Controls />
      </ReactFlow>
    </div>
  );
}