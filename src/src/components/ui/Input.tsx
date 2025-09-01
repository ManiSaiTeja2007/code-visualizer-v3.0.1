// src/components/ui/Input.tsx
'use client';
import { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border rounded-md p-2 w-full" {...props} />;
}