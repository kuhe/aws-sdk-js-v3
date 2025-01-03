const { CloudWatch: CloudWatchCbor } = require("@aws-sdk/client-cloudwatch-cbor");
const { headStream, splitStream } = require("@smithy/util-stream");
const { toUtf8 } = require("@smithy/util-utf8");

async function errorBody(e) {
  if (!e?.$response) {
    throw e;
  }
  e.$response.body = toUtf8(await headStream(e.$response.body, Infinity));
  console.log(e.$response);
  throw e;
}

(async () => {
  const cw = new CloudWatchCbor({
    region: "us-west-2",
    disableRequestCompression: true,
  });

  cw.middlewareStack.add(
    (next, context) => async (args) => {
      console.log(args.request);
      console.log(args.request.body.byteLength);
      const result = await next(args);

      return result;
    },
    {
      step: "finalizeRequest",
    }
  );

  await cw
    .putMetricData({
      Namespace: "TestNamespace",
      MetricData: Array.from({ length: 1000 }).map((el, i) => {
        return {
          MetricName: "TestMetric",
          Dimensions: [
            {
              Name: "TestNamespace",
              Value: `abcd-12${i}34`,
            },
          ],
          Value: 0.5,
          Unit: "None",
          Timestamp: new Date(new Date().getTime() - 60 * 60 * 1000),
        };
      }),
    })
    .catch(errorBody);
})();
