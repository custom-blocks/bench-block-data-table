import { useCallback } from 'react';
import type { TableState } from '../core/types';
import { resizeWidth } from '../features/column-sizing';
export function useColumnResizing(state: TableState, setState: (s: TableState) => void) { const resize = useCallback((id: string, start: number, delta: number) => setState({ ...state, sizes: { ...state.sizes, [id]: resizeWidth(state.sizes[id] ?? start, delta) } }), [state, setState]); return { sizes: state.sizes, resize }; }
