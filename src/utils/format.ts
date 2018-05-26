export function format(value: string | number): string {
  if (
    typeof value === 'number' ||
    /^\d+$/.test(value.charAt(value.length - 1))
  ) {
    return `${value}px`;
  }
  return value;
}
