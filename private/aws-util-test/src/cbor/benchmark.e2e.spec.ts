import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { describe, expect, test as it } from "vitest";

import { Echo } from "../../../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-cbor-echo-service/typescript-codegen";

type AnyClient = Echo | CloudWatch | SecretsManager;

const data = {} as {
  [scenario: string]: {
    totalRequest: {
      timings: number[];
    };
    serialization: {
      timings: number[];
    };
    deserialization: {
      timings: number;
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
  const requestHandler = {
    async handle() {},
  };

  const echo = new Echo({
    region,
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

  describe("local only", () => {
    it("placeholder", async () => {});
  });
});

async function runIterations(client: AnyClient, fn: (client: AnyClient) => Promise<void>, iterations = 500) {
  client.middlewareStack.addRelativeTo(
    (next: any) => async (args: any) => {
      const result = await next(args);
      return result;
    },
    {
      toMiddleware: "",
      relation: "after",
      override: true,
      name: "",
    }
  );
  for (let iteration = 0; iteration < iterations; ++iteration) {
    const totalRequestTimeStart = performance.now();
    await fn(client);
    const totalRequestTimeEnd = performance.now();
  }
}
