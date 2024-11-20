const { CloudWatch } = require("@aws-sdk/client-cloudwatch");
const { CloudWatch: CloudWatchCbor } = require("@aws-sdk/client-cloudwatch-cbor");
const { SecretsManager } = require("@aws-sdk/client-secrets-manager");
const { SecretsManager: SecretsManagerCbor } = require("@aws-sdk/client-secrets-manager-cbor");
const crypto = require("node:crypto");
const { Readable } = require("node:stream");
const osu = require("node-os-utils");

const {
  Echo,
} = require("../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-cbor-echo-service/typescript-codegen");
const {
  Echo: EchoJson,
} = require("../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-json-echo-service/typescript-codegen");

const recordedData = {
  cbor: {},
  awsJson: {},
  awsQuery: {},
};

const reportingData = [];

const region = "us-west-2";
const echoCborHandler = {
  async handle(request) {
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
  async handle(request) {
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
const cwQuery = new CloudWatch({
  region,
});
const cwCbor = new CloudWatchCbor({
  region,
});
const smJson = new SecretsManager({
  region,
});
const smCbor = new SecretsManagerCbor({
  region,
});

function p50(values) {
  return values[(values.length * 0.5) | 0];
}
function p90(values) {
  return values[(values.length * 0.9) | 0];
}
function max(values) {
  return values[values.length - 1];
}
function record(scenario, service, protocol, metric, _data) {
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

function recordScenario(scenario, service, protocol) {
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

async function runIterations(client, scenario, protocol, setup, fn, iterations = 500) {
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
    (next, context) => async (args) => {
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
    (next, context) => async (args) => {
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
    (next, context) => async (args) => {
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
    (next, context) => async (args) => {
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
    await fn(client);
    const totalRequestTimeEnd = performance.now();
    recordedData[protocol][scenario].totalRequest.timings.push(totalRequestTimeEnd - totalRequestTimeStart);
    // data[protocol][scenario].cpuUtilziation.percentageMeasures.push(await osu.cpu.usage());
    // data[protocol][scenario].memoryUtilization.byteMeasures.push((await osu.mem.used()).usedMemMb);
    process.stdout.write(".");
  }
}

(async () => {
  for (const { client, protocol } of [
    { client: echoCbor, protocol: "cbor" },
    { client: echoJson, protocol: "awsJson" },
  ]) {
    {
      let data;
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
        async (echo) => {
          await echo.echoOperation(data);
        },
        10
      );
    }

    {
      let data;
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
        async (echo) => {
          await echo.echoOperation(data);
        },
        10
      );
    }

    {
      let data;
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
        async (echo) => {
          await echo.echoOperation(data);
        },
        10
      );
    }

    {
      let data;
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
        async (echo) => {
          await echo.echoOperation(data);
        },
        50
      );
    }

    {
      let data;
      await runIterations(
        client,
        "Very large blob",
        protocol,
        () => {
          data = {
            blobMember: crypto.randomBytes(262144),
          };
        },
        async (echo) => {
          await echo.echoOperation(data);
        },
        10
      );
    }
  }

  for (const { client, protocol } of [
    { client: smJson, protocol: "awsJson" },
    { client: smCbor, protocol: "cbor" },
  ]) {
    client;
    protocol;
    // delete secrets.
  }

  for (const { client, protocol } of [
    { client: cwQuery, protocol: "awsQuery" },
    { client: cwCbor, protocol: "cbor" },
  ]) {
    client;
    protocol;
  }

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
})();
