export const ViewTabStyle = {
  simple: { simple: '', detail: 'opacity-40' },
  detail: { simple: 'opacity-40', detail: '' },
} as const satisfies Record<string, { simple: string; detail: string }>;
