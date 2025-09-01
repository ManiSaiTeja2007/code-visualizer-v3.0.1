// src/features/visualizer/hooks/useVisualizerState.ts
import { useReducer } from 'react';

const initialState = { step: 0 };

function reducer(state: typeof initialState, action: { type: 'next' | 'prev' }) {
  switch (action.type) {
    case 'next': return { step: state.step + 1 };
    case 'prev': return { step: Math.max(0, state.step - 1) }; // Edge case
    default: return state;
  }
}

export function useVisualizerState() {
  return useReducer(reducer, initialState);
}