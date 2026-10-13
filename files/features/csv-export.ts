import type { Column, TableRow } from '../core/types';
import { escapeCsv } from '../utils/csv';
export function rowsToCsv<T>(rows: TableRow<T>[], columns: Column<T>[]): string { const head = columns.map(c => escapeCsv(c.header)).join(','); const body = rows.map(r => columns.map(c => escapeCsv(r.values[c.id])).join(',')).join('\n'); return `${head}\n${body}`; }
export function downloadCsv(csv: string, filename = 'table.csv'): void { const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url); }
