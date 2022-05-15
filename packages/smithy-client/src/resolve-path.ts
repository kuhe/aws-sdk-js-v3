import { extendedEncodeURIComponent } from "./extended-encode-uri-component";

export function resolvedPath(
  resolvedPath: string,
  input: unknown,
  memberName: string,
  labelValue: string | undefined,
  uriLabel: string,
  isGreedyLabel: boolean
): string {
  if (input != null && (input as Record<string, unknown>)[memberName] !== undefined) {
    const __labelValue = labelValue as string;
    if (__labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
    }
    resolvedPath = resolvedPath.replace(
      uriLabel,
      isGreedyLabel
        ? __labelValue
            .split("/")
            .map((segment) => extendedEncodeURIComponent(segment))
            .join("/")
        : extendedEncodeURIComponent(__labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: " + memberName + ".");
  }
  return resolvedPath;
}
