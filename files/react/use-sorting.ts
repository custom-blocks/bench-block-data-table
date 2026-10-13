import { useCallback } from 'react';
import type { SortRule, TableState } from '../core/types';
import { toggleSort } from '../core/sorting';
export function useSorting(state: TableState, setState: (s: TableState) => void) { const sort = useCallback((id: string, multi = false) => setState({ ...state, sorting: toggleSort(state.sorting, id, multi) }), [state, setState]); return { sorting: state.sorting, sort }; }
