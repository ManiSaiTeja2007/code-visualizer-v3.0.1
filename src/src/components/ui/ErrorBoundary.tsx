// src/components/ui/ErrorBoundary.tsx
'use client';
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('UI Error:', error);
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}