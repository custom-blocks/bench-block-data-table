import type { Column, RowId, TableRow } from './types';
import { readAccessor } from '../utils/accessor';
export function getRowId<T>(row: T, index: number, key?: keyof T | ((row: T, index: number) => RowId)): RowId { return String(typeof key === 'function' ? key(row, index) : key ? row[key] : index); }
export function buildRows<T>(data: T[], columns: Column<T>[], selected: Set<RowId>, key?: keyof T | ((row: T, index: number) => RowId)): TableRow<T>[] { return data.map((original, index) => { const id = getRowId(original, index, key); const values = Object.fromEntries(columns.map(c => [c.id, readAccessor(original, c.accessor)])); return { id, index, original, values, selected: selected.has(id) }; }); }
export function mapRows<T, U>(rows: TableRow<T>[], fn: (row: TableRow<T>) => U): U[] { return rows.map(fn); }
