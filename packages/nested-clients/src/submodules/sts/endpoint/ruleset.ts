// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/sts.json */

const F = "required",
  G = "type",
  H = "fn",
  I = "argv",
  J = "ref";
const a = false,
  b = true,
  c = "booleanEquals",
  d = "stringEquals",
  e = "sigv4",
  f = "sts",
  g = "us-east-1",
  h = "endpoint",
  i = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
  j = "tree",
  k = "error",
  l = "getAttr",
  m = { [F]: false, [G]: "String" },
  n = { [F]: true, default: false, [G]: "Boolean" },
  o = { [J]: "Endpoint" },
  p = { [H]: "isSet", [I]: [{ [J]: "Region" }] },
  q = { [J]: "Region" },
  r = { [H]: "aws.partition", [I]: [q], assign: "PartitionResult" },
  s = { [J]: "UseFIPS" },
  t = { [J]: "UseDualStack" },
  u = {
    url: "https://sts.amazonaws.com",
    properties: { authSchemes: [{ name: e, signingName: f, signingRegion: g }] },
    headers: {},
  },
  v = {},
  w = { conditions: [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h },
  x = { [H]: c, [I]: [s, true] },
  y = { [H]: c, [I]: [t, true] },
  z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] },
  A = { [J]: "PartitionResult" },
  B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] },
  C = [{ [H]: "isSet", [I]: [o] }],
  D = [x],
  E = [y];
const _data = {
  version: "1.0",
  parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n },
  rules: [
    {
      conditions: [
        { [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] },
        { [H]: "not", [I]: C },
        p,
        r,
        { [H]: c, [I]: [s, a] },
        { [H]: c, [I]: [t, a] },
      ],
      rules: [
        { conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h },
        w,
        { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h },
        { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h },
        {
          endpoint: {
            url: i,
            properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] },
            headers: v,
          },
          [G]: h,
        },
      ],
      [G]: j,
    },
    {
      conditions: C,
      rules: [
        { conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k },
        { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k },
        { endpoint: { url: o, properties: v, headers: v }, [G]: h },
      ],
      [G]: j,
    },
    {
      conditions: [p],
      rules: [
        {
          conditions: [r],
          rules: [
            {
              conditions: [x, y],
              rules: [
                {
                  conditions: [{ [H]: c, [I]: [b, z] }, B],
                  rules: [
                    {
                      endpoint: {
                        url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: v,
                        headers: v,
                      },
                      [G]: h,
                    },
                  ],
                  [G]: j,
                },
                { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k },
              ],
              [G]: j,
            },
            {
              conditions: D,
              rules: [
                {
                  conditions: [{ [H]: c, [I]: [z, b] }],
                  rules: [
                    {
                      conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }],
                      endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v },
                      [G]: h,
                    },
                    {
                      endpoint: {
                        url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                        properties: v,
                        headers: v,
                      },
                      [G]: h,
                    },
                  ],
                  [G]: j,
                },
                { error: "FIPS is enabled but this partition does not support FIPS", [G]: k },
              ],
              [G]: j,
            },
            {
              conditions: E,
              rules: [
                {
                  conditions: [B],
                  rules: [
                    {
                      endpoint: {
                        url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: v,
                        headers: v,
                      },
                      [G]: h,
                    },
                  ],
                  [G]: j,
                },
                { error: "DualStack is enabled but this partition does not support DualStack", [G]: k },
              ],
              [G]: j,
            },
            w,
            { endpoint: { url: i, properties: v, headers: v }, [G]: h },
          ],
          [G]: j,
        },
      ],
      [G]: j,
    },
    { error: "Invalid Configuration: Missing Region", [G]: k },
  ],
};
export const ruleSet: RuleSetObject = _data;
