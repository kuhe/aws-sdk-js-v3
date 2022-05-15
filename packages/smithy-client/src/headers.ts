/**
 * Assists in the generation of request headers.
 * @param headers - key-value map.
 * @returns headers filtered for serializable values.
 */
export function filterHeaders(headers: Record<string, string>): typeof headers {
  for (const k of Object.keys(headers)) {
    if (Array.isArray(k) && k.length === 2) {
      const [test, value] = k;
      if (!isSerializableHeaderValue(test)) {
        delete headers[k];
      } else {
        headers[k] = value;
      }
    } else {
      if (!isSerializableHeaderValue(headers[k])) {
        delete headers[k];
      }
    }
  }
  return headers;
}

function isSerializableHeaderValue(value: null | undefined | (string & { length?: number; size?: number })): boolean {
  return (
    value != null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}
