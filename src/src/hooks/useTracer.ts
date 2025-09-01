// src/hooks/useTracer.ts
export function useTracer(code: string, lang: string) {
  const worker = new Worker(new URL('./tracerWorker.ts', import.meta.url));
  worker.postMessage({ code, lang });
  return new Promise((res) => {
    worker.onmessage = (e) => res(e.data);
  });
}