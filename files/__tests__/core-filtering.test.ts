import { filterRows } from '../core/filtering';
const rows = [{ id: 'a', index: 0, original: {}, values: { name: 'Alpha' }, selected: false }];
if (filterRows(rows, [{ id: 'name', value: 'alp' }]).length !== 1) throw new Error('filtering');
