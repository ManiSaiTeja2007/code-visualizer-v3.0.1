// src/components/ui/GitHubInstructionsModal.tsx
'use client';
import { useState } from 'react';
import Button from './Button';

export default function GitHubInstructionsModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Load from GitHub</Button>
      {open && (
        <div className="modal">
          <p>Instructions: 1. Create repo. 2. Push folder to dev branch: git add .; git commit -m &#34;update&#34;; git push origin dev</p>
          <p>Disclaimer: You are responsible for any damages.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      )}
    </>
  );
}