const { CloudWatch } = require("@aws-sdk/client-cloudwatch");
const { CloudWatch: CloudWatchCbor } = require("@aws-sdk/client-cloudwatch-cbor");
const { SecretsManager } = require("@aws-sdk/client-secrets-manager");
const { SecretsManager: SecretsManagerCbor } = require("@aws-sdk/client-secrets-manager-cbor");
const { headStream, splitStream } = require("@smithy/util-stream");
const { toUtf8 } = require("@smithy/util-utf8");
const crypto = require("node:crypto");
const { Readable } = require("node:stream");
const osu = require("node-os-utils");
const fs = require("node:fs");
const path = require("node:path");

const {
  Echo,
} = require("../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-cbor-echo-service/typescript-codegen");
const {
  Echo: EchoJson,
} = require("../../codegen/generic-client-test-codegen/build/smithyprojections/generic-client-test-codegen/aws-json-echo-service/typescript-codegen");

const recordedData = {
  CBOR: {},
  JSON: {},
  Query: {},
};

const reportingData = [];
const sizes = [64, 512, 4096, 8192, 45056];
const metricCounts = [16, 64, 256 /*, 1000 */];

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
  disableRequestCompression: true,
});
const cwCbor = new CloudWatchCbor({
  region,
  disableRequestCompression: true,
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
function record(scenario, service, protocol, metric, dimensionValue, _data) {
  const data = _data.slice().sort();
  const recording = {
    service,
    test_case: scenario,
    protocol: protocol,
    dimension_value: dimensionValue,
    metric,
    p50: Number(p50(data).toFixed(3)),
    p90: Number(p90(data).toFixed(3)),
    max: Number(max(data).toFixed(3)),
  };
  reportingData.push(recording);
  return recording;
}
async function errorBody(e) {
  if (!e?.$response) {
    throw e;
  }
  e.$response.body = toUtf8(await headStream(e.$response.body, Infinity));
  console.log(e.$response);
  throw e;
}
function recordScenario(scenario, service, protocol, dimensionValue) {
  try {
    record(
      scenario,
      service,
      protocol,
      "Total request time (ms)",
      dimensionValue,
      recordedData[protocol][scenario][dimensionValue].totalRequest.timings
    );
  } catch (e) {
    console.log(
      JSON.stringify(
        {
          context:
            recordedData[protocol]?.[scenario]?.[dimensionValue] ??
            recordedData[protocol]?.[scenario] ??
            recordedData[protocol],
        },
        null,
        2
      )
    );
    throw new Error(`Could not read recordedData[${protocol}][${scenario}][${dimensionValue}].totalRequest.timings.`);
  }

  record(
    scenario,
    service,
    protocol,
    "Serialization time (ms)",
    dimensionValue,
    recordedData[protocol][scenario][dimensionValue].serialization.timings
  );
  record(
    scenario,
    service,
    protocol,
    "Deserialization time (ms)",
    dimensionValue,
    recordedData[protocol][scenario][dimensionValue].deserialization.timings
  );
  record(
    scenario,
    service,
    protocol,
    "Request payload size (bytes)",
    dimensionValue,
    recordedData[protocol][scenario][dimensionValue].requestPayloadSize.byteMeasures
  );
  record(
    scenario,
    service,
    protocol,
    "Response payload size (bytes)",
    dimensionValue,
    recordedData[protocol][scenario][dimensionValue].responsePayloadSize.byteMeasures
  );
}

async function runIterations(client, scenario, protocol, setup, fn, extract, dimensionValue = 0, iterations = 1) {
  recordedData[protocol][scenario] = recordedData[protocol][scenario] ?? {};
  recordedData[protocol][scenario][dimensionValue] = {
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
  const stats = {};
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
      // timestamp before returning to the deser middleware.
      context.afterDeserializerMiddleware = performance.now();
      return result;
    },
    {
      toMiddleware: "deserializerMiddleware",
      relation: "after",
      override: true,
      name: "afterDeserializerMiddleware",
      priority: "high",
    }
  );
  client.middlewareStack.addRelativeTo(
    (next, context) => async (args) => {
      const result = await next(args);
      // timestamp of exiting the deser middleware.
      context.beforeDeserializerMiddleware = performance.now();
      recordedData[protocol][scenario][dimensionValue].serialization.timings.push(
        context.afterSerializerMiddleware - context.beforeSerializerMiddleware
      );
      recordedData[protocol][scenario][dimensionValue].deserialization.timings.push(
        Math.abs(context.beforeDeserializerMiddleware - context.afterDeserializerMiddleware)
      );
      recordedData[protocol][scenario][dimensionValue].requestPayloadSize.byteMeasures.push(
        args.request.body.byteLength ?? Buffer.from(args.request.body ?? "").byteLength
      );
      recordedData[protocol][scenario][dimensionValue].responsePayloadSize.byteMeasures.push(
        Number(result.response.headers["content-length"])
      );
      return result;
    },
    {
      toMiddleware: "deserializerMiddleware",
      relation: "before",
      override: true,
      name: "beforeDeserializerMiddleware",
      priority: "high",
    }
  );
  client.middlewareStack.add(
    (next, context) => async (args) => {
      const A = performance.now();
      const result = await next(args);
      stats[context.commandName] = stats[context.commandName] ?? [];
      const B = performance.now();
      stats[context.commandName].push(B - A);
      return result;
    },
    {
      step: "build",
      priority: "high",
      override: true,
      name: "statsMiddleware",
    }
  );
  for (let iteration = 0; iteration < iterations; ++iteration) {
    await setup();
    await fn(client);
    // data[protocol][scenario][dimensionValue].cpuUtilziation.percentageMeasures.push(await osu.cpu.usage());
    // data[protocol][scenario][dimensionValue].memoryUtilization.byteMeasures.push((await osu.mem.used()).usedMemMb);
    process.stdout.write(".");
  }
  recordedData[protocol][scenario][dimensionValue].totalRequest.timings.push(...stats[extract]);
}

(async () => {
  for (const { client, protocol } of [
    { client: echoCbor, protocol: "CBOR" },
    { client: echoJson, protocol: "JSON" },
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
        "EchoOperationCommand"
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
        "EchoOperationCommand"
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
        "EchoOperationCommand"
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
        "EchoOperationCommand"
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
        "EchoOperationCommand"
      );
    }
  }

  for (const { client, protocol } of [
    { client: smJson, protocol: "JSON" },
    { client: smCbor, protocol: "CBOR" },
  ]) {
    let secretName = `TestSecret_0_0`;
    let binarySecretName = `TestBinarySecret_0_0`;

    await client
      .createSecret({
        Name: secretName,
        SecretString: "0",
        Tags: [
          { Key: "Stage", Value: "Production" },
          { Key: "Iteration", Value: "0" },
        ],
      })
      .catch(() => {});
    await client
      .createSecret({
        Name: binarySecretName,
        SecretBinary: new Uint8Array([0]),
        Tags: [
          { Key: "Stage", Value: "Production" },
          { Key: "Iteration", Value: "0" },
        ],
      })
      .catch(() => {});

    for (const size of sizes) {
      {
        let stringValue;
        await runIterations(
          client,
          "Put string secret",
          protocol,
          async () => {
            stringValue = crypto.randomBytes(size / 2).toString("hex");
          },
          async (sm) => {
            await sm.putSecretValue({
              SecretId: secretName,
              SecretString: stringValue,
            });
          },
          "PutSecretValueCommand",
          size
        );
        await runIterations(
          client,
          "Get string secret",
          protocol,
          async () => {},
          async (sm) => {
            await sm.getSecretValue({
              SecretId: secretName,
            });
          },
          "GetSecretValueCommand",
          size
        );
      }
      {
        let binaryValue;
        await runIterations(
          client,
          "Put binary secret",
          protocol,
          async () => {
            binaryValue = crypto.randomBytes(size);
          },
          async (sm) => {
            await sm.putSecretValue({
              SecretId: binarySecretName,
              SecretBinary: binaryValue,
            });
          },
          "PutSecretValueCommand",
          size
        );
        await runIterations(
          client,
          "Get binary secret",
          protocol,
          async () => {},
          async (sm) => {
            await sm.getSecretValue({
              SecretId: binarySecretName,
            });
          },
          "GetSecretValueCommand",
          size
        );
      }

      {
        await runIterations(
          client,
          "Describe secret",
          protocol,
          () => {},
          async (sm) => {
            await sm.describeSecret({
              SecretId: secretName,
            });
          },
          "DescribeSecretCommand",
          size
        );
      }
      {
        await runIterations(
          client,
          "List secrets",
          protocol,
          () => {},
          async (sm) => {
            await sm.listSecrets({
              Filters: [
                {
                  Key: "tag-key",
                  Values: ["Iteration"],
                },
                {
                  Key: "tag-value",
                  Values: ["0"],
                },
              ],
            });
          },
          "ListSecretsCommand",
          size
        );
      }
    }
  }

  for (const { client, protocol } of [
    { client: cwQuery, protocol: "Query" },
    { client: cwCbor, protocol: "CBOR" },
  ]) {
    for (const metricCount of metricCounts) {
      let Namespace;
      let suiteId = crypto.randomBytes(8).toString("hex") + "-" + ((Date.now() / 1000) | 0);
      let baseTime = new Date(Date.now() - 2 * 60 * 60 * 1000);
      {
        let MetricData;
        await runIterations(
          client,
          "Put metric data",
          protocol,
          () => {
            Namespace = "TestNamespace";
            MetricData = Array.from({ length: metricCount }).map((el, i) => {
              return {
                MetricName: "TestMetric",
                Dimensions: [
                  {
                    Name: "TestNamespace",
                    Value: `${suiteId}-${metricCount}`,
                  },
                ],
                Value: Math.random(),
                Unit: "None",
                Timestamp: new Date(baseTime.getTime() + 2000 * (i + 1)),
              };
            });
          },
          async (cw) => {
            await cw
              .putMetricData({
                Namespace,
                MetricData,
              })
              .catch(errorBody);
          },
          "PutMetricDataCommand",
          metricCount
        );
      }
      {
        let MetricDataQueries;
        await runIterations(
          client,
          "Get metric data",
          protocol,
          () => {
            MetricDataQueries = [
              {
                Id: "m0",
                ReturnData: true,
                MetricStat: {
                  Unit: "None",
                  Stat: "Sum",
                  Metric: {
                    Namespace: "TestNamespace",
                    MetricName: "TestMetric",
                    Dimensions: [
                      {
                        Name: "TestDimension",
                        Value: `${suiteId}-${metricCount}`,
                      },
                    ],
                  },
                  Period: 60,
                },
              },
            ];
          },
          async (cw) => {
            await cw
              .getMetricData({
                StartTime: baseTime,
                EndTime: new Date(baseTime.getTime() + 60 * 60 * 1000),
                MetricDataQueries,
              })
              .catch(errorBody);
          },
          "GetMetricDataCommand",
          metricCount
        );
      }
      {
        await runIterations(
          client,
          "List metrics",
          protocol,
          () => {},
          async (cw) => {
            await cw
              .listMetrics({
                Namespace,
              })
              .catch(errorBody);
          },
          "ListMetricsCommand",
          metricCount
        );
      }
    }
  }

  for (const protocol of ["CBOR", "JSON"]) {
    recordScenario("All types", "Echo", protocol, 0);
    recordScenario("Long list of strings", "Echo", protocol, 0);
    recordScenario("Complex object", "Echo", protocol, 0);
    recordScenario("List of complex objects", "Echo", protocol, 0);
    recordScenario("Very large blob", "Echo", protocol, 0);
  }

  for (const protocol of ["CBOR", "JSON"]) {
    for (const size of sizes) {
      recordScenario("Put string secret", "SecretsManager", protocol, size);
      recordScenario("Put binary secret", "SecretsManager", protocol, size);
      recordScenario("Get string secret", "SecretsManager", protocol, size);
      recordScenario("Get binary secret", "SecretsManager", protocol, size);
      recordScenario("Describe secret", "SecretsManager", protocol, size);
      recordScenario("List secrets", "SecretsManager", protocol, size);
    }
  }

  for (const protocol of ["CBOR", "Query"]) {
    for (const metricCount of metricCounts) {
      recordScenario("Put metric data", "Cloudwatch", protocol, metricCount);
      recordScenario("Get metric data", "Cloudwatch", protocol, metricCount);
      recordScenario("List metrics", "Cloudwatch", protocol, metricCount);
    }
  }

  fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(reportingData, null, 2));

  reportingData.sort((a, b) => {
    if (a.metric === b.metric) {
      return a.p90 - b.p90;
    }
    return a.metric < b.metric ? -1 : 1;
  });
  fs.writeFileSync(path.join(__dirname, "data-sorted.json"), JSON.stringify(reportingData, null, 2));

  console.table(reportingData);
})();
