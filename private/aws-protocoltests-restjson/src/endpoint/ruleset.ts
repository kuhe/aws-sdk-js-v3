// smithy-typescript generated code
import { RuleSetObject } from "@smithy/types";

export const ruleSet: RuleSetObject = {
  version: "1.0",
  parameters: {
    Region: {
      builtIn: "AWS::Region",
      required: false,
      documentation: "The AWS Region. This is a default regional AWS endpointRuleSet.",
      type: "String",
    },
    UseDualStack: {
      builtIn: "AWS::UseDualStack",
      required: true,
      default: false,
      documentation: "Whether to use dual-stack.",
      type: "Boolean",
    },
    UseFIPS: {
      builtIn: "AWS::UseFIPS",
      required: true,
      default: false,
      documentation: "Whether to use FIPS-compliant regional endpoint.",
      type: "Boolean",
    },
    Endpoint: {
      builtIn: "SDK::Endpoint",
      required: false,
      documentation: "Override the endpoint.",
      type: "String",
    },
  },
  rules: [
    {
      conditions: [
        {
          fn: "isSet",
          argv: [
            {
              ref: "Endpoint",
            },
          ],
        },
      ],
      rules: [
        {
          conditions: [
            {
              fn: "booleanEquals",
              argv: [
                {
                  ref: "UseFIPS",
                },
                true,
              ],
            },
          ],
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: "error",
        },
        {
          conditions: [
            {
              fn: "booleanEquals",
              argv: [
                {
                  ref: "UseDualStack",
                },
                true,
              ],
            },
          ],
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: "error",
        },
        {
          conditions: [],
          endpoint: {
            url: {
              ref: "Endpoint",
            },
            properties: {},
            headers: {},
          },
          type: "endpoint",
        },
      ],
      type: "tree",
    },
    {
      conditions: [
        {
          fn: "isSet",
          argv: [
            {
              ref: "Region",
            },
          ],
        },
      ],
      rules: [
        {
          conditions: [
            {
              fn: "aws.partition",
              argv: [
                {
                  ref: "Region",
                },
              ],
              assign: "PartitionResult",
            },
          ],
          rules: [
            {
              conditions: [
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseFIPS",
                    },
                    true,
                  ],
                },
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseDualStack",
                    },
                    true,
                  ],
                },
              ],
              rules: [
                {
                  conditions: [
                    {
                      fn: "booleanEquals",
                      argv: [
                        true,
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsFIPS",
                          ],
                        },
                      ],
                    },
                    {
                      fn: "booleanEquals",
                      argv: [
                        true,
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsDualStack",
                          ],
                        },
                      ],
                    },
                  ],
                  rules: [
                    {
                      conditions: [],
                      endpoint: {
                        url: "https://restjson-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: {},
                        headers: {},
                      },
                      type: "endpoint",
                    },
                  ],
                  type: "tree",
                },
                {
                  conditions: [],
                  error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                  type: "error",
                },
              ],
              type: "tree",
            },
            {
              conditions: [
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseFIPS",
                    },
                    true,
                  ],
                },
              ],
              rules: [
                {
                  conditions: [
                    {
                      fn: "booleanEquals",
                      argv: [
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsFIPS",
                          ],
                        },
                        true,
                      ],
                    },
                  ],
                  rules: [
                    {
                      conditions: [
                        {
                          fn: "stringEquals",
                          argv: [
                            {
                              fn: "getAttr",
                              argv: [
                                {
                                  ref: "PartitionResult",
                                },
                                "name",
                              ],
                            },
                            "aws-us-gov",
                          ],
                        },
                      ],
                      endpoint: {
                        url: "https://restjson.{Region}.amazonaws.com",
                        properties: {},
                        headers: {},
                      },
                      type: "endpoint",
                    },
                    {
                      conditions: [],
                      endpoint: {
                        url: "https://restjson-fips.{Region}.{PartitionResult#dnsSuffix}",
                        properties: {},
                        headers: {},
                      },
                      type: "endpoint",
                    },
                  ],
                  type: "tree",
                },
                {
                  conditions: [],
                  error: "FIPS is enabled but this partition does not support FIPS",
                  type: "error",
                },
              ],
              type: "tree",
            },
            {
              conditions: [
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseDualStack",
                    },
                    true,
                  ],
                },
              ],
              rules: [
                {
                  conditions: [
                    {
                      fn: "booleanEquals",
                      argv: [
                        true,
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsDualStack",
                          ],
                        },
                      ],
                    },
                  ],
                  rules: [
                    {
                      conditions: [],
                      endpoint: {
                        url: "https://restjson.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        properties: {},
                        headers: {},
                      },
                      type: "endpoint",
                    },
                  ],
                  type: "tree",
                },
                {
                  conditions: [],
                  error: "DualStack is enabled but this partition does not support DualStack",
                  type: "error",
                },
              ],
              type: "tree",
            },
            {
              conditions: [],
              endpoint: {
                url: "https://restjson.{Region}.{PartitionResult#dnsSuffix}",
                properties: {},
                headers: {},
              },
              type: "endpoint",
            },
          ],
          type: "tree",
        },
      ],
      type: "tree",
    },
    {
      conditions: [],
      error: "Invalid Configuration: Missing Region",
      type: "error",
    },
  ],
};
