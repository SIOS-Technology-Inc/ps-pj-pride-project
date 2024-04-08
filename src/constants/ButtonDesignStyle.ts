export const ButtonDesignStyle = {
  default: ' border border-gray text-gray',
  blue: ' border border-event text-event',
  fillBlue: ' bg-event text-white',
  red: ' border border-red-400 text-error',
  fillRed: ' bg-red-400 text-white',
} as const satisfies Record<string, string>;
