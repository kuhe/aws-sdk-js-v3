import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { HttpRequest, HttpResponse } from "@smithy/types";
import * as crypto from "node:crypto";
import { Readable } from "node:stream";
import osu from "node-os-utils";
import { afterAll, describe, expect, test as it } from "vitest";

import {
  Echo,
  EchoOperationCommandInput,
} from "../../../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-cbor-echo-service/typescript-codegen";
import { Echo as EchoJson } from "../../../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-json-echo-service/typescript-codegen";

type AnyClient = Echo | CloudWatch | SecretsManager;
type AnyClientFn =
  | ((echo: Echo) => Promise<void>)
  | ((echo: CloudWatch) => Promise<void>)
  | ((echo: SecretsManager) => Promise<void>);

type ProtocolTestData = {
  [scenario: string]: {
    totalRequest: {
      timings: number[];
    };
    serialization: {
      timings: number[];
    };
    deserialization: {
      timings: number[];
    };
    requestPayloadSize: {
      byteMeasures: number[];
    };
    responsePayloadSize: {
      byteMeasures: number[];
    };
    memoryUtilization: {
      byteMeasures: number[];
    };
    cpuUtilziation: {
      percentageMeasures: number[];
    };
  };
};

const recordedData = {
  cbor: {},
  awsJson: {},
  awsQuery: {},
} as {
  cbor: ProtocolTestData;
  awsJson: ProtocolTestData;
  awsQuery: ProtocolTestData;
};
const reportingData = [] as ReturnType<typeof record>[];

describe("cbor benchmark", () => {
  const region = "us-west-2";
  const echoCborHandler = {
    async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
      return {
        response: {
          statusCode: 200,
          headers: {
            "smithy-protocol": "rpc-v2-cbor",
            "content-length": String(request.body?.byteLength ?? 0),
          },
          body: request.body ?? Readable.from(Buffer.from("")),
        },
      };
    },
  };
  const echoJsonHandler = {
    async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
      return {
        response: {
          statusCode: 200,
          headers: {
            "content-type": "application/json",
            "content-length": String(Buffer.from(request.body).byteLength ?? 0),
          },
          body: Buffer.from(request.body),
        },
      };
    },
  };

  const echoCbor = new Echo({
    region,
    requestHandler: echoCborHandler,
  });
  const echoJson = new EchoJson({
    region,
    requestHandler: echoJsonHandler,
  });
  const cw = new CloudWatch({
    region,
  });
  const sm = new SecretsManager({
    region,
  });

  afterAll(() => {
    recordScenario("All types", "Echo", "cbor");
    recordScenario("Long list of strings", "Echo", "cbor");
    recordScenario("Complex object", "Echo", "cbor");
    recordScenario("List of complex objects", "Echo", "cbor");
    recordScenario("Very large blob", "Echo", "cbor");

    recordScenario("All types", "Echo", "awsJson");
    recordScenario("Long list of strings", "Echo", "awsJson");
    recordScenario("Complex object", "Echo", "awsJson");
    recordScenario("List of complex objects", "Echo", "awsJson");
    recordScenario("Very large blob", "Echo", "awsJson");

    console.table(reportingData);
  });

  for (const { client, protocol } of [
    { client: echoCbor, protocol: "cbor" as const },
    { client: echoJson, protocol: "awsJson" as const },
  ]) {
    describe(`Echo (${protocol})`, () => {
      it("All types", async () => {
        let data: EchoOperationCommandInput;
        await runIterations(
          client,
          "All types",
          protocol,
          () => {
            data = {
              booleanMember: Math.random() < 0.5 ? false : true,
              stringMember: crypto.randomBytes(16).toString("hex"),
              integerMember: (Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER) | 0,
              longMember: (Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER) | 0,
              floatMember: Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER,
              doubleMember: Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER,
              timestampMember: new Date(),
              blobMember: crypto.randomBytes(128),
              listOfStringsMember: [
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
                crypto.randomBytes(16).toString("hex"),
              ],
              mapOfStringToStringMember: {
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
              },
              complexStructMember: {
                stringMember: crypto.randomBytes(16).toString("hex"),
                complexStructMember: {
                  stringMember: crypto.randomBytes(16).toString("hex"),
                },
              },
            };
          },
          async (echo: Echo) => {
            await echo.echoOperation(data);
          },
          10
        );
      });

      it("Long list of strings", async () => {
        let data: EchoOperationCommandInput;
        await runIterations(
          client,
          "Long list of strings",
          protocol,
          () => {
            data = {
              listOfStringsMember: Array.from({ length: 256 }).map(() => {
                return crypto.randomBytes(32).toString("hex");
              }),
            };
          },
          async (echo: Echo) => {
            await echo.echoOperation(data);
          },
          10
        );
      });

      it("Complex object", async () => {
        let data: EchoOperationCommandInput;
        await runIterations(
          client,
          "Complex object",
          protocol,
          () => {
            data = {
              booleanMember: Math.random() < 0.5 ? false : true,
              blobMember: crypto.randomBytes(128),
              stringMember: crypto.randomBytes(16).toString("hex"),
              complexStructMember: {
                integerMember: (Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER) | 0,
                longMember: (Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER) | 0,
                stringMember: crypto.randomBytes(16).toString("hex"),
                complexStructMember: {
                  floatMember: Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER,
                  doubleMember: Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER,
                  stringMember: crypto.randomBytes(16).toString("hex"),
                  complexStructMember: {
                    listOfStringsMember: [
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                      crypto.randomBytes(16).toString("hex"),
                    ],
                    mapOfStringToStringMember: {
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                      [crypto.randomBytes(16).toString("hex")]: crypto.randomBytes(32).toString("hex"),
                    },
                  },
                },
              },
            };
          },
          async (echo: Echo) => {
            await echo.echoOperation(data);
          },
          10
        );
      });

      it("List of complex objects", async () => {
        let data: EchoOperationCommandInput;
        await runIterations(
          client,
          "List of complex objects",
          protocol,
          () => {
            data = {
              listOfComplexObjectMember: Array.from({ length: 64 }).map(() => {
                return {
                  booleanMember: Math.random() < 0.5 ? false : true,
                  stringMember: crypto.randomBytes(16).toString("hex"),
                  longMember: (Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER) | 0,
                  doubleMember: Number.MIN_SAFE_INTEGER + Math.random() * Number.MAX_SAFE_INTEGER,
                  timestampMember: new Date(),
                  listOfStringsMember: [
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                    crypto.randomBytes(16).toString("hex"),
                  ],
                };
              }),
            };
          },
          async (echo: Echo) => {
            await echo.echoOperation(data);
          },
          50
        );
      });

      it("Very large blob", async () => {
        let data: EchoOperationCommandInput;
        await runIterations(
          client,
          "Very large blob",
          protocol,
          () => {
            data = {
              blobMember: crypto.randomBytes(262144),
            };
          },
          async (echo: Echo) => {
            await echo.echoOperation(data);
          },
          10
        );
      });
    });
  }

  describe("SecretsManager", () => {
    it("placeholder", async () => {
      sm;
    });
  });

  describe("CloudWatch", () => {
    it("placeholder", async () => {
      cw;
    });
  });
}, 600_000);

function p50(values: number[]) {
  return values[(values.length * 0.5) | 0];
}
function p90(values: number[]) {
  return values[(values.length * 0.9) | 0];
}
function max(values: number[]) {
  return values[values.length - 1];
}
function record(scenario: string, service: string, protocol: string, metric: string, _data: number[]) {
  const data = _data.slice().sort();
  const recording = {
    service,
    test_case: scenario,
    protocol: protocol,
    dimension_value: 0,
    metric,
    p50: Number(p50(data).toFixed(3)),
    p90: Number(p90(data).toFixed(3)),
    max: Number(max(data).toFixed(3)),
  };
  reportingData.push(recording);
  return recording;
}

function recordScenario(scenario: string, service: string, protocol: "cbor" | "awsJson" | "awsQuery") {
  record(scenario, service, protocol, "Total request time (ms)", recordedData[protocol][scenario].totalRequest.timings);
  record(
    scenario,
    service,
    protocol,
    "Serialization time (ms)",
    recordedData[protocol][scenario].serialization.timings
  );
  record(
    scenario,
    service,
    protocol,
    "Deserialization time (ms)",
    recordedData[protocol][scenario].deserialization.timings
  );
  record(
    scenario,
    service,
    protocol,
    "Request payload size (bytes)",
    recordedData[protocol][scenario].requestPayloadSize.byteMeasures
  );
  record(
    scenario,
    service,
    protocol,
    "Response payload size (bytes)",
    recordedData[protocol][scenario].responsePayloadSize.byteMeasures
  );
}

async function runIterations(
  client: AnyClient,
  scenario: string,
  protocol: "cbor" | "awsJson" | "awsQuery",
  setup: () => Promise<void> | void,
  fn: AnyClientFn,
  iterations = 500
) {
  recordedData[protocol][scenario] = {
    totalRequest: {
      timings: [],
    },
    serialization: {
      timings: [],
    },
    deserialization: {
      timings: [],
    },
    requestPayloadSize: {
      byteMeasures: [],
    },
    responsePayloadSize: {
      byteMeasures: [],
    },
    memoryUtilization: {
      byteMeasures: [],
    },
    cpuUtilziation: {
      percentageMeasures: [],
    },
  };
  client.middlewareStack.addRelativeTo(
    (next: any, context: any) => async (args: any) => {
      context.beforeSerializerMiddleware = performance.now();
      const result = await next(args);
      return result;
    },
    {
      toMiddleware: "serializerMiddleware",
      relation: "before",
      override: true,
      name: "beforeSerializerMiddleware",
    }
  );
  client.middlewareStack.addRelativeTo(
    (next: any, context: any) => async (args: any) => {
      context.afterSerializerMiddleware = performance.now();
      const result = await next(args);
      return result;
    },
    {
      toMiddleware: "serializerMiddleware",
      relation: "after",
      override: true,
      name: "afterSerializerMiddleware",
    }
  );
  client.middlewareStack.addRelativeTo(
    (next: any, context: any) => async (args: any) => {
      const result = await next(args);
      context.afterDeserializerMiddleware = performance.now();
      return result;
    },
    {
      toMiddleware: "deserializerMiddleware",
      relation: "after",
      override: true,
      name: "afterDeserializerMiddleware",
    }
  );
  client.middlewareStack.addRelativeTo(
    (next: any, context: any) => async (args: any) => {
      context.beforeDeserializerMiddleware = performance.now();
      const result = await next(args);
      recordedData[protocol][scenario].serialization.timings.push(
        context.afterSerializerMiddleware - context.beforeSerializerMiddleware
      );
      recordedData[protocol][scenario].deserialization.timings.push(
        Math.abs(context.beforeDeserializerMiddleware - context.afterDeserializerMiddleware)
      );
      recordedData[protocol][scenario].requestPayloadSize.byteMeasures.push(
        args.request.body.byteLength ?? Buffer.from(args.request.body ?? "").byteLength
      );
      recordedData[protocol][scenario].responsePayloadSize.byteMeasures.push(
        Number(result.response.headers["content-length"])
      );
      return result;
    },
    {
      toMiddleware: "deserializerMiddleware",
      relation: "before",
      override: true,
      name: "beforeDeserializerMiddleware",
    }
  );
  for (let iteration = 0; iteration < iterations; ++iteration) {
    const totalRequestTimeStart = performance.now();
    await setup();
    await fn(client as any);
    const totalRequestTimeEnd = performance.now();
    recordedData[protocol][scenario].totalRequest.timings.push(totalRequestTimeEnd - totalRequestTimeStart);
    // data[protocol][scenario].cpuUtilziation.percentageMeasures.push(await osu.cpu.usage());
    // data[protocol][scenario].memoryUtilization.byteMeasures.push((await osu.mem.used()).usedMemMb);
  }
}
