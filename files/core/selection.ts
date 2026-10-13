import type { RowId, TableRow } from './types';
export function toggleRow(selected: Set<RowId>, id: RowId, enabled?: boolean): Set<RowId> { const next = new Set(selected); (enabled ?? !next.has(id)) ? next.add(id) : next.delete(id); return next; }
export function toggleAll<T>(selected: Set<RowId>, rows: TableRow<T>[], enabled?: boolean): Set<RowId> { const next = new Set(selected); const add = enabled ?? !rows.every(r => next.has(r.id)); rows.forEach(r => add ? next.add(r.id) : next.delete(r.id)); return next; }
export function selectionCount<T>(rows: TableRow<T>[], selected: Set<RowId>): number { return rows.reduce((n, r) => n + (selected.has(r.id) ? 1 : 0), 0); }
