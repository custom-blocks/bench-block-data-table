import { useCallback } from 'react';
import type { TableState } from '../core/types';
import { setVisibility } from '../features/column-visibility';
export function useColumnVisibility(state: TableState, setState: (s: TableState) => void) { const setVisible = useCallback((id: string, visible: boolean) => setState({ ...state, hidden: setVisibility(state.hidden, id, visible) }), [state, setState]); return { hidden: state.hidden, setVisible }; }
