// src/features/common/DSVisualizer.tsx
'use client';
export default function DSVisualizer({ detectedDS }: { detectedDS: any }) {
  return <div>Data Structure: {detectedDS.type}</div>;
}