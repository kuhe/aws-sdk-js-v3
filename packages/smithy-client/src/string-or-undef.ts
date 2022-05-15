/**
 * @param input - any value.
 * @returns string value of input unless undefined.
 */
export function str(input: undefined): undefined;
export function str(input: unknown): string | undefined;
export function str(input: unknown): string | undefined {
  if (input !== void 0) {
    return String(input);
  }
  return undefined;
}
