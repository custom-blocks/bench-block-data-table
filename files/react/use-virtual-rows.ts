import { useMemo } from 'react';
import type { TableRow } from '../core/types';
import { getVirtualRange } from '../features/virtualizer';
export function useVirtualRows<T>(rows: TableRow<T>[], scrollTop: number, height: number, rowHeight = 36) { const range = useMemo(() => getVirtualRange(rows.length, scrollTop, height, rowHeight), [rows.length, scrollTop, height, rowHeight]); return { ...range, rows: rows.slice(range.start, range.end) }; }
