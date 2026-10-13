import { useCallback } from 'react';
import type { RowId, TableState } from '../core/types';
import { toggleRow } from '../core/selection';
export function useSelection(state: TableState, setState: (s: TableState) => void) { const select = useCallback((id: RowId, enabled?: boolean) => setState({ ...state, selected: toggleRow(state.selected, id, enabled) }), [state, setState]); return { selected: state.selected, select }; }
