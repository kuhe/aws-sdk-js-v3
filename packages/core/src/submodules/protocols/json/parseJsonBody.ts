import type { HttpResponse, SerdeFunctions } from "@smithy/types";

import { collectBodyString } from "../common";

/**
 * @internal
 */
export const parseJsonBody = (streamBody: any, context: SerdeFunctions): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      try {
        return JSON.parse(encoded);
      } catch (e: any) {
        if (e?.name === "SyntaxError") {
          Object.defineProperty(e, "$responseBodyText", {
            value: encoded,
          });
        }
        throw e;
      }
    }
    return {};
  });

/**
 * @internal
 */
export const parseJsonErrorBody = async (errorBody: any, context: SerdeFunctions) => {
  const value = await parseJsonBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * @internal
 */
export const loadRestJsonErrorCode = (output: HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data && typeof data === "object") {
    const codeKey = findKey(data, "code");
    if (codeKey && data[codeKey] !== undefined) {
      return sanitizeErrorCode(data[codeKey]);
    }

    if (data["__type"] !== undefined) {
      return sanitizeErrorCode(data["__type"]);
    }
  }
};
