import { ClientDefaultValues } from "./runtimeConfig";

export type InputType = {
  byteLength?: number;
  length?: number;
  size?: number;
  path?: string;
};

export function byteLength(input: null | undefined): 0;
export function byteLength(input: string): number;
export function byteLength<T>(input: T | InputType): number | undefined;
export function byteLength(input: any): number | undefined {
  if (input === null || input === undefined) return 0;

  if (typeof input === "string") input = Buffer.from(input);

  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  } else if (typeof input.path === "string") {
    try {
      return ClientDefaultValues.lstatSync(input.path).size;
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
}
