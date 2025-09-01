// src/features/visualizer/components/UMLDiagram.tsx
'use client';
import ReactFlow from '@xyflow/react';

export default function UMLDiagram({ nodes, edges }: { nodes: any[]; edges: any[] }) {
  return <ReactFlow nodes={nodes} edges={edges} />; // Stub for class/seq
}