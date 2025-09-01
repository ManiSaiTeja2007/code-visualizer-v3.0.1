// src/features/analyzer/components/FileBlockNode.tsx
'use client';
export default function FileBlockNode({ data }: { data: { label: string } }) {
  return <div className="border p-4 bg-blue-100">{data.label}</div>;
}