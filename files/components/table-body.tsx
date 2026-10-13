import type { Column, TableRow } from '../core/types';
export function TableBody<T>({ columns, rows }: { columns: Column<T>[]; rows: TableRow<T>[] }) { return <tbody>{rows.map(row => <tr key={row.id}>{columns.map(c => <td key={c.id}>{String(row.values[c.id] ?? '')}</td>)}</tr>)}</tbody>; }
