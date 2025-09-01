// src/components/editor/CodeEditor.tsx
'use client';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ lang, value, onChange }: { lang: string; value: string; onChange: (v: string) => void }) {
  return (
    <Editor
      height="90vh"
      language={lang}
      value={value}
      onChange={(v) => onChange(v || '')}
      options={{ minimap: { enabled: false } }}
    />
  );
}