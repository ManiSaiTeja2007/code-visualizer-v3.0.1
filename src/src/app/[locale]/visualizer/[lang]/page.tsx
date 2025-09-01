// src/app/visualizer/[lang]/page.tsx
'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import CodeEditor from '@/components/editor/CodeEditor';
import ExecutionFlowDiagram from '@/features/visualizer/components/ExecutionFlowDiagram';
import { useCodeExecution } from '@/hooks/useCodeExecution';

const LazyVariableTracker = dynamic(() => import('@/features/visualizer/components/VariableTracker'), { ssr: false });

export default function VisualizerPage({ params }: { params: { lang: string } }) {
  const { code, setCode, result, error } = useCodeExecution(params.lang);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <CodeEditor lang={params.lang} value={code} onChange={setCode} />
      <Suspense fallback={<div>Loading...</div>}>
        {error ? <p>Error: {error}</p> : null}
        <ExecutionFlowDiagram trace={result?.trace} />
        <LazyVariableTracker variables={result?.variables} />
      </Suspense>
    </div>
  );
}