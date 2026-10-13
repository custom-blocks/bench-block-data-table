import type { Accessor } from '../core/types';
export function readAccessor<T>(row: T, accessor?: Accessor<T>): unknown { if (typeof accessor === 'function') return accessor(row); if (accessor) return row[accessor]; return row; }
export function pathAccessor<T>(path: string): (row: T) => unknown { return row => path.split('.').reduce<unknown>((value, key) => value == null ? undefined : (value as Record<string, unknown>)[key], row); }
