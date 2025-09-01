// src/components/layout/Header.tsx
import Link from 'next/link';
import LangSelector from '@/components/ui/LangSelector';
import UndoButton from '@/components/ui/UndoButton';

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <LangSelector />
      <UndoButton />
    </header>
  );
}