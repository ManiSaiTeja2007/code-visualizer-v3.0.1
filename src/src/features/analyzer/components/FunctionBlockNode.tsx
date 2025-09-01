// src/features/analyzer/components/FunctionBlockNode.tsx
'use client';
export default function FunctionBlockNode({ data }: { data: { label: string } }) {
  return <div className="border p-2 bg-green-100">{data.label}</div>;
}