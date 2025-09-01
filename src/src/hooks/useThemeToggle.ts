// src/hooks/useThemeToggle.ts
import { useTheme } from 'next-themes';

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  return { theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') };
}