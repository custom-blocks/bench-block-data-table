export interface ResizeState { id: string; startX: number; startWidth: number; }
export function resizeWidth(start: number, delta: number, min = 48, max = 800): number { return Math.min(max, Math.max(min, Math.round(start + delta))); }
export function beginResize(id: string, startX: number, startWidth: number): ResizeState { return { id, startX, startWidth }; }
