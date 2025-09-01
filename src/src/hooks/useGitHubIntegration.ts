// src/hooks/useGitHubIntegration.ts
import { useState } from 'react';

export function useGitHubIntegration() {
  const [branch, setBranch] = useState('dev');
  const mergeToMain = async () => {
    if (confirm('Merge to main? Check conflicts manually.')) {
      // API call to backend proxy
    }
  };
  return { branch, mergeToMain };
}