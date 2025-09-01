// src/components/ui/LangSelector.tsx
'use client';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

const languages = [
  { value: 'python', label: 'Python' },
  { value: 'c', label: 'C' },
  { value: 'cpp', label: 'C++' },
  { value: 'rust', label: 'Rust' },
  { value: 'java', label: 'Java' },
];

export default function LangSelector() {
  const router = useRouter();
  return (
    <Select
      options={languages}
      onChange={(opt) => router.push(`/visualizer/${opt?.value}`)}
      className="w-32"
    />
  );
}