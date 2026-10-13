import { sortRows } from '../core/sorting';
const rows = [{ id: 'a', index: 0, original: {}, values: { score: 2 }, selected: false }, { id: 'b', index: 1, original: {}, values: { score: 1 }, selected: false }];
if (sortRows(rows, [{ id: 'score', direction: 'asc' }])[0].id !== 'b') throw new Error('sorting');
