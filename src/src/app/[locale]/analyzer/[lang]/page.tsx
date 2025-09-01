// src/app/analyzer/[lang]/page.tsx
'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import FlowGraph from '@/features/analyzer/components/FlowGraph';
import ErrorPanel from '@/features/analyzer/components/ErrorPanel';
import { useStaticAnalyzer } from '@/hooks/useStaticAnalyzer';
import { useFlowGraphBuilder } from '@/hooks/useFlowGraphBuilder';
import SearchBar from '@/components/ui/SearchBar';

export default function AnalyzerPage({ params }: { params: { lang: string } }) {
  const { ast, errors } = useStaticAnalyzer(params.lang);
  const { nodes, edges } = useFlowGraphBuilder(ast);

  return (
    <div className="p-4">
      <SearchBar onSearch={(query) => { /* filter */ }} />
      <ErrorPanel errors={errors} />
      <Suspense fallback={<div>Loading...</div>}>
        <FlowGraph nodes={nodes} edges={edges} />
      </Suspense>
    </div>
  );
}