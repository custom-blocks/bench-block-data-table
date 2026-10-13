import { column } from '../core/column-defs';
const check = (ok: boolean, message: string) => { if (!ok) throw new Error(message); };
const id = column<{ id: number }>('id', 'ID', 'id');
check(id.id === 'id' && id.header === 'ID', 'column metadata');
