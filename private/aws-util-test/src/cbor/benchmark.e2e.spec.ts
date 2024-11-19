import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { HttpRequest, HttpResponse } from "@smithy/types";
import * as crypto from "node:crypto";
import osu from "node-os-utils";
import { afterAll, describe, expect, test as it } from "vitest";

import {
  Echo,
  EchoOperationCommandInput,
} from "../../../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-cbor-echo-service/typescript-codegen";

type AnyClient = Echo | CloudWatch | SecretsManager;
type AnyClientFn =
  | ((echo: Echo) => Promise<void>)
  | ((echo: CloudWatch) => Promise<void>)
  | ((echo: SecretsManager) => Promise<void>);

const data = {} as {
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

describe("cbor benchmark", () => {
  const region = "us-west-2";
  const echoHandler = {
    async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
      return {
        response: {
          statusCode: 200,
          headers: {
            "smithy-protocol": "rpc-v2-cbor",
            "content-length": String(request.body?.byteLength ?? 0),
          },
          body: request.body,
        },
      };
    },
  };

  const echo = new Echo({
    region,
    requestHandler: echoHandler,
  });
  const cw = new CloudWatch({
    region,
  });
  const sm = new SecretsManager({
    region,
  });

  it("client loads", async () => {
    expect(echo).toBeDefined();
    expect(cw).toBeDefined();
    expect(sm).toBeDefined();
  });

  afterAll(() => {
    console.table(data);
  });

  describe("Echo (local only)", () => {
    it("all types", async () => {
      let data: EchoOperationCommandInput;
      await runIterations(
        echo,
        "Echo, all types",
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
        1
      );
    });
  });
});

async function runIterations(
  client: AnyClient,
  scenario: string,
  setup: () => Promise<void> | void,
  fn: AnyClientFn,
  iterations = 500
) {
  data[scenario] = {
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
      data[scenario].serialization.timings.push(context.afterSerializerMiddleware - context.beforeSerializerMiddleware);
      data[scenario].deserialization.timings.push(
        context.beforeDeserializerMiddleware - context.afterDeserializerMiddleware
      );
      data[scenario].requestPayloadSize.byteMeasures.push(args.request.body.byteLength ?? 0);
      data[scenario].responsePayloadSize.byteMeasures.push(Number(result.response.headers["content-length"]));
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
    data[scenario].totalRequest.timings.push(totalRequestTimeEnd - totalRequestTimeStart);
    data[scenario].cpuUtilziation.percentageMeasures.push(await osu.cpu.usage());
    data[scenario].memoryUtilization.byteMeasures.push((await osu.mem.used()).usedMemMb);
  }
}
