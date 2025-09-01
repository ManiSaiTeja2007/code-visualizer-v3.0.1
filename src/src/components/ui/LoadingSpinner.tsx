// src/components/ui/LoadingSpinner.tsx
'use client';
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500" />
    </div>
  );
}