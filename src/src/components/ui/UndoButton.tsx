// src/components/ui/UndoButton.tsx
'use client';
import Button from './Button';
import { useUndoRedo } from '@/hooks/useUndoRedo';

export default function UndoButton() {
  const { undo } = useUndoRedo();
  return <Button onClick={undo}>Undo</Button>;
}