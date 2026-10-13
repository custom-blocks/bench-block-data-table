import { toggleRow } from '../core/selection';
const selected = toggleRow(new Set(), 'one');
if (!selected.has('one') || toggleRow(selected, 'one').has('one')) throw new Error('selection');
