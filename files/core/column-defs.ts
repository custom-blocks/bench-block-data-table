import type { Accessor, Column } from './types';
export function column<T>(id: string, header: string, accessor?: Accessor<T>, options: Partial<Column<T>> = {}): Column<T> { return { id, header, accessor, sortable: true, filterable: true, visible: true, ...options }; }
export function normalizeColumns<T>(columns: Column<T>[]): Column<T>[] { const seen = new Set<string>(); return columns.map((c, i) => { let id = c.id || `column-${i}`; while (seen.has(id)) id = `${id}-${i}`; seen.add(id); return { ...c, id }; }); }
export function visibleColumns<T>(columns: Column<T>[], hidden: Set<string>): Column<T>[] { return columns.filter(c => c.visible !== false && !hidden.has(c.id)); }
