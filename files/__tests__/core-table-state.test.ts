import { createTableState, updatePagination } from '../core/table-state';
const state = createTableState();
if (updatePagination(state, { pageIndex: 2 }).pagination.pageIndex !== 2) throw new Error('pagination update');
