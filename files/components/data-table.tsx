import type { Column, TableRow } from '../core/types';
export interface DataTableProps<T> { columns: Column<T>[]; rows: TableRow<T>[]; }
export function DataTable<T>({ columns, rows }: DataTableProps<T>) { return <table><thead><tr>{columns.map(c => <th key={c.id}>{c.header}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row.id}>{columns.map(c => <td key={c.id}>{String(row.values[c.id] ?? '')}</td>)}</tr>)}</tbody></table>; }
