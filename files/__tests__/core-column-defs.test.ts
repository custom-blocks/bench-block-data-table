import { column, normalizeColumns, visibleColumns } from '../core/column-defs';
const cols = normalizeColumns([column('x', 'X'), column('x', 'Duplicate')]);
if (cols.length !== 2 || visibleColumns(cols, new Set(['x'])).length !== 1) throw new Error('columns');
