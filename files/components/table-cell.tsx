import type { Column, TableRow } from '../core/types';
export function TableCell<T>({ column, row }: { column: Column<T>; row: TableRow<T> }) { const value = row.values[column.id]; return <td>{column.cell ? column.cell(value, row.original) : String(value ?? '')}</td>; }
