import { buildRows } from '../core/row-model';
const rows = buildRows([{ id: 'a', name: 'A' }], [{ id: 'name', header: 'Name', accessor: 'name' }], new Set(), 'id');
if (rows[0].id !== 'a' || rows[0].values.name !== 'A') throw new Error('row model');
