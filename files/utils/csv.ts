export function escapeCsv(value: unknown): string { const text = String(value ?? ''); return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text; }
