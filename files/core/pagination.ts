import type { PaginationState, TableRow } from './types';
export function pageRows<T>(rows: TableRow<T>[], state: PaginationState): TableRow<T>[] { const start = state.pageIndex * state.pageSize; return rows.slice(start, start + state.pageSize); }
export function pageCount(total: number, size: number): number { return Math.max(1, Math.ceil(total / Math.max(1, size))); }
export function clampPage(state: PaginationState, total: number): PaginationState { return { ...state, pageIndex: Math.min(Math.max(0, state.pageIndex), pageCount(total, state.pageSize) - 1) }; }
