// src/components/ui/AIExplanationButton.tsx
'use client';
import Button from './Button';
import { useState } from 'react';

export default function AIExplanationButton({ code }: { code: string }) {
  const [explanation, setExplanation] = useState('');
  const [error, setError] = useState('');

  const getExplanation = async () => {
    try {
      const response = await fetch('/api/ai-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setExplanation(data.explanation);
    } catch (err) {
      setError('Failed to get explanation');
    }
  };

  return (
    <div>
      <Button onClick={getExplanation}>Get AI Explanation</Button>
      {explanation && <p>{explanation}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}