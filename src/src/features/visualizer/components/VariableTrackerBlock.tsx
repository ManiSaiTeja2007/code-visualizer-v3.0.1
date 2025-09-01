// src/features/visualizer/components/VariableTrackerBlock.tsx
'use client';
import Tooltip from '@/components/ui/Tooltip';

export default function VariableTrackerBlock({ varName, history }: { varName: string; history: any[] }) {
  return (
    <Tooltip content={`History: ${history.join(', ')}`}>
      <div className="border p-2">{varName}</div>
    </Tooltip>
  );
}