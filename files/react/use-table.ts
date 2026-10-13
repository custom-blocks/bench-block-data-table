import { useMemo, useState } from 'react';
import type { Column, TableState } from '../core/types';
import { buildRows } from '../core/row-model';
import { createTableState } from '../core/table-state';
export function useTable<T>(data: T[], columns: Column<T>[], initial?: Partial<TableState>) { const [state, setState] = useState(() => createTableState(initial)); const rows = useMemo(() => buildRows(data, columns, state.selected), [data, columns, state.selected]); return { state, setState, rows, columns }; }
