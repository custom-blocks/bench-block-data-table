import { useCallback } from 'react';
import type { FilterRule, TableState } from '../core/types';
import { upsertFilter } from '../core/filtering';
export function useFilters(state: TableState, setState: (s: TableState) => void) { const setFilter = useCallback((filter: FilterRule) => setState({ ...state, filters: upsertFilter(state.filters, filter) }), [state, setState]); return { filters: state.filters, setFilter }; }
