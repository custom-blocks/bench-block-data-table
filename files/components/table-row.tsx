import type { Column, TableRow } from '../core/types';
export function TableRowView<T>({ row, columns }: { row: TableRow<T>; columns: Column<T>[] }) { return <tr aria-selected={row.selected}>{columns.map(c => <td key={c.id}>{String(row.values[c.id] ?? '')}</td>)}</tr>; }
