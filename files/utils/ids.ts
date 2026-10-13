let sequence = 0;
export function createId(prefix = 'row'): string { sequence += 1; return `${prefix}-${sequence.toString(36)}`; }
export function resetIds(): void { sequence = 0; }
