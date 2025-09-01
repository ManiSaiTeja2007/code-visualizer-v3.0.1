// src/app/[locale]/visualizer/[lang]/page.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense, use } from 'react';
import CodeEditor from '@/components/editor/CodeEditor';
import ExecutionFlowDiagram from '@/features/visualizer/components/ExecutionFlowDiagram';
import { useCodeExecution } from '@/hooks/useCodeExecution';

const LazyVariableTracker = dynamic(
  () => import('@/features/visualizer/components/VariableTracker'),
  { ssr: false }
);

export default function VisualizerPage({ params }: { params: Promise<{ lang: string }> }) {
  // ✅ unwrap params with use()
  const { lang } = use(params);

  const { code, setCode, result, error } = useCodeExecution(lang);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <CodeEditor lang={lang} value={code} onChange={setCode} />
      <Suspense fallback={<div>Loading...</div>}>
        {error ? <p>Error: {error}</p> : null}
        <ExecutionFlowDiagram trace={result?.trace ?? []} />
        <LazyVariableTracker variables={result?.variables ?? []} />
      </Suspense>
    </div>
  );
}
