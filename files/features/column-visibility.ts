import type { Column } from '../core/types';
export function isVisible<T>(column: Column<T>, hidden: Set<string>): boolean { return column.visible !== false && !hidden.has(column.id); }
export function setVisibility(hidden: Set<string>, id: string, visible: boolean): Set<string> { const next = new Set(hidden); visible ? next.delete(id) : next.add(id); return next; }
export function visibleColumns<T>(columns: Column<T>[], hidden: Set<string>): Column<T>[] { return columns.filter(c => isVisible(c, hidden)); }
