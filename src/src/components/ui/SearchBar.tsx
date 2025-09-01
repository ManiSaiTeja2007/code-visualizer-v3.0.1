// src/components/ui/SearchBar.tsx
'use client';
import { useState } from 'react';
import Input from './Input';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  return (
    <Input
      type="text"
      placeholder="Search nodes..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
}