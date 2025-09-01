// src/features/visualizer/components/VariableTracker.tsx
'use client';
import VariableTrackerBlock from './VariableTrackerBlock';

export default function VariableTracker({ variables }: { variables: Record<string, any[]> }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(variables).map(([name, hist]) => (
        <VariableTrackerBlock key={name} varName={name} history={hist} />
      ))}
    </div>
  );
}