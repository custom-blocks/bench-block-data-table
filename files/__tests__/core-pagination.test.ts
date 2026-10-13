import { pageRows, pageCount } from '../core/pagination';
const rows = Array.from({ length: 5 }, (_, index) => ({ id: String(index), index, original: {}, values: {}, selected: false }));
if (pageRows(rows, { pageIndex: 1, pageSize: 2 }).length !== 2 || pageCount(5, 2) !== 3) throw new Error('pagination');
