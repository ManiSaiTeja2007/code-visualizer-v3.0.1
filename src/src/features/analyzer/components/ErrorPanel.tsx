// src/features/analyzer/components/ErrorPanel.tsx
'use client';
export default function ErrorPanel({ errors }: { errors: string[] }) {
  return (
    <div className="bg-red-100 p-4">
      <ul>
        {errors.map((err, i) => <li key={i}>{err}</li>)}
      </ul>
    </div>
  );
}