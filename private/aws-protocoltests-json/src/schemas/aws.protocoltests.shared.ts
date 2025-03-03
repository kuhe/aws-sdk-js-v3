const _DT = "DateTime";
const _FE = "FooEnum";
const _FEL = "FooEnumList";
const _FEM = "FooEnumMap";
const _FES = "FooEnumSet";
const _GS = "GreetingStruct";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IEM = "IntegerEnumMap";
const _IES = "IntegerEnumSet";
const _SL = "StringList";
const _SM = "StringMap";
const _SSL = "SparseStringList";
const _SSM = "SparseStringMap";
const _h = "hi";
const _s = "sparse";

// smithy-typescript generated code
import { list as __list, map as __map, struct as __struct, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = __struct(_GS, 0, [_h], [0]);
export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var SparseStringList = __list(
  _SSL,
  {
    [_s]: 1,
  },
  0
);
export var StringList = 64 | 0;

export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var SparseStringMap = __map(
  _SSM,
  {
    [_s]: 1,
  },
  0
);
export var StringMap = 128 | 0;

aws_protocoltests_sharedRegistry.stopCapture();
