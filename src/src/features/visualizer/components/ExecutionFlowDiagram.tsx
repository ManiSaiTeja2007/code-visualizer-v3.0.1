// src/features/visualizer/components/ExecutionFlowDiagram.tsx
'use client';

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ExecutionFlowDiagram({ trace }: { trace?: any[] }) {
  const safeTrace = trace ?? []; // ✅ fallback
  const memoizedTrace = useMemo(() => safeTrace, [safeTrace]);

  useEffect(() => {
    // Logic (safeTrace is always an array)
  }, [memoizedTrace]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>Execution Flow: {safeTrace.length} steps</div>
    </motion.div>
  );
}
