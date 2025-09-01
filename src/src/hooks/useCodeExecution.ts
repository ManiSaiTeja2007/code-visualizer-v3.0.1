// src/hooks/useCodeExecution.ts
import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export function useCodeExecution(lang: string) {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const debouncedCode = useDebounce(code, 500);

  useEffect(() => {
    const execute = async () => {
      try {
        const trace = await useTracer(debouncedCode, lang);
        setResult(trace);
      } catch (e) {
        setError(e.message);
      }
    };
    execute();
  }, [debouncedCode, lang]);

  return { code, setCode, result, error };
}