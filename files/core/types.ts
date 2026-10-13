export type RowId = string;
export type SortDirection = 'asc' | 'desc';
export type FilterValue = string | number | boolean | null;
export type Accessor<T> = keyof T | ((row: T) => unknown);
export interface Column<T> { id: string; header: string; accessor?: Accessor<T>; width?: number; minWidth?: number; maxWidth?: number; sortable?: boolean; filterable?: boolean; visible?: boolean; cell?: (value: unknown, row: T) => React.ReactNode; }
export interface SortRule { id: string; direction: SortDirection; }
export interface FilterRule { id: string; value: FilterValue; operator?: 'contains' | 'equals' | 'startsWith' | 'gt' | 'gte' | 'lt' | 'lte'; }
export interface PaginationState { pageIndex: number; pageSize: number; }
export interface TableState { sorting: SortRule[]; filters: FilterRule[]; pagination: PaginationState; selected: Set<RowId>; hidden: Set<string>; sizes: Record<string, number>; }
export interface TableRow<T> { id: RowId; index: number; original: T; values: Record<string, unknown>; selected: boolean; }
export interface TableInstance<T> { rows: TableRow<T>[]; columns: Column<T>[]; state: TableState; setState: (next: TableState) => void; }
