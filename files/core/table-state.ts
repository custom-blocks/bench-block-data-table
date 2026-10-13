import type { FilterRule, PaginationState, SortRule, TableState } from './types';
export const initialTableState: TableState = { sorting: [], filters: [], pagination: { pageIndex: 0, pageSize: 25 }, selected: new Set(), hidden: new Set(), sizes: {} };
export function createTableState(overrides: Partial<TableState> = {}): TableState { return { ...initialTableState, ...overrides, pagination: { ...initialTableState.pagination, ...overrides.pagination }, selected: new Set(overrides.selected ?? []), hidden: new Set(overrides.hidden ?? []) }; }
export function updateSorting(state: TableState, sorting: SortRule[]): TableState { return { ...state, sorting, pagination: { ...state.pagination, pageIndex: 0 } }; }
export function updateFilters(state: TableState, filters: FilterRule[]): TableState { return { ...state, filters, pagination: { ...state.pagination, pageIndex: 0 } }; }
export function updatePagination(state: TableState, pagination: Partial<PaginationState>): TableState { return { ...state, pagination: { ...state.pagination, ...pagination } }; }
export function toggleSet(set: Set<string>, value: string, enabled?: boolean): Set<string> { const next = new Set(set); (enabled ?? !next.has(value)) ? next.add(value) : next.delete(value); return next; }
