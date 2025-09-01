// src/hooks/useVisualization.ts
import { useMemo } from 'react';

export function useVisualization(trace: any) {
  return useMemo(() => ({ vizData: trace }), [trace]);
}