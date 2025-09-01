// src/hooks/useUndoRedo.ts
import { useState } from 'react';

export function useUndoRedo<T>(initial: T) {
  const [history, setHistory] = useState<T[]>([initial]);
  const [index, setIndex] = useState(0);

  const undo = () => setIndex(i => Math.max(0, i - 1));
  const redo = () => setIndex(i => Math.min(history.length - 1, i + 1));
  const add = (state: T) => {
    setHistory(h => [...h.slice(0, index + 1), state].slice(-50)); // Cap 50 for memory
    setIndex(i => i + 1);
  };

  return { state: history[index], undo, redo, add };
}