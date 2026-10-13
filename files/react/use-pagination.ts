import { useCallback } from 'react';
import type { TableState } from '../core/types';
export function usePagination(state: TableState, setState: (s: TableState) => void) { const setPage = useCallback((pageIndex: number) => setState({ ...state, pagination: { ...state.pagination, pageIndex } }), [state, setState]); const setPageSize = useCallback((pageSize: number) => setState({ ...state, pagination: { pageIndex: 0, pageSize } }), [state, setState]); return { pagination: state.pagination, setPage, setPageSize }; }
