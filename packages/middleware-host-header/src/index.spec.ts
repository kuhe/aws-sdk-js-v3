import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { hostHeaderMiddleware, resolveHostHeaderConfig } from "./index";
describe("hostHeaderMiddleware", () => {
  const mockNextHandler = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("maintains object custody", () => {
    const input = {
      requestHandler: vi.fn() as any,
    };
    expect(resolveHostHeaderConfig(input)).toBe(input);
  });

  it("should set host header if not already set", async () => {
    expect.assertions(2);
    const middleware = hostHeaderMiddleware({ requestHandler: {} as any });
    const handler = middleware(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({ hostname: "foo.amazonaws.com" }),
    });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.host).toBe("foo.amazonaws.com");
  });

  it("should include port in host header when set", async () => {
    expect.assertions(2);
    const middleware = hostHeaderMiddleware({ requestHandler: {} as any });
    const handler = middleware(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({ hostname: "foo.amazonaws.com", port: 443 }),
    });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.host).toBe("foo.amazonaws.com:443");
  });

  it("should not set host header if already set", async () => {
    expect.assertions(2);
    const middleware = hostHeaderMiddleware({ requestHandler: {} as any });
    const handler = middleware(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "foo.amazonaws.com",
        headers: { host: "random host" },
      }),
    });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.host).toBe("random host");
  });

  it("should set :authority header for H2 requests", async () => {
    expect.assertions(3);
    const middleware = hostHeaderMiddleware({
      requestHandler: { metadata: { handlerProtocol: "h2" } },
    } as any);
    const handler = middleware(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "foo.amazonaws.com",
        port: 8080,
        headers: { host: "random host" },
      }),
    });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.host).not.toBeDefined();
    expect(mockNextHandler.mock.calls[0][0].request.headers[":authority"]).toEqual("foo.amazonaws.com:8080");
  });
});
