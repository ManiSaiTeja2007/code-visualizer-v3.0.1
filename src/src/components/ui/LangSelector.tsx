// src/components/ui/LangSelector.tsx
'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const languages = [
  { value: 'python', label: 'Python' },
  { value: 'c', label: 'C' },
  { value: 'cpp', label: 'C++' },
  { value: 'rust', label: 'Rust' },
  { value: 'java', label: 'Java' }
];

export default function LangSelector() {
  const router = useRouter();
  const params = useParams(); // ✅ get current locale from URL
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ avoid hydration mismatch

  const locale = (params?.locale as string) ?? 'en';

  return (
    <Select
      options={languages}
      onChange={(opt) => {
        if (opt?.value) {
          router.push(`/${locale}/visualizer/${opt.value}`);
        }
      }}
      className="w-32"
      placeholder="Select Language..."
    />
  );
}
