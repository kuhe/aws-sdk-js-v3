const _BL = "BooleanList";
const _DL = "DoubleList";
const _DT = "DateTime";
const _ES = "EpochSeconds";
const _FE = "FooEnum";
const _FEL = "FooEnumList";
const _FEM = "FooEnumMap";
const _FES = "FooEnumSet";
const _GS = "GreetingStruct";
const _HD = "HttpDate";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IEM = "IntegerEnumMap";
const _IES = "IntegerEnumSet";
const _IL = "IntegerList";
const _IS = "IntegerSet";
const _JB = "JpegBlob";
const _NSL = "NestedStringList";
const _SL = "StringList";
const _SLM = "StringListMap";
const _SM = "StringMap";
const _SS = "StringSet";
const _SSL = "SparseStringList";
const _SSLp = "SparseShortList";
const _SSM = "SparseStringMap";
const _TL = "TimestampList";
const _TPB = "TextPlainBlob";
const _h = "hi";
const _i = "image/jpeg";
const _mT = "mediaType";
const _s = "sparse";
const _t = "text/plain";

// smithy-typescript generated code
import { list as __list, map as __map, sim as __sim, struct as __struct, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var JpegBlob = __sim(_JB, 21, {
  [_mT]: _i,
});
export var TextPlainBlob = __sim(_TPB, 21, {
  [_mT]: _t,
});
export var GreetingStruct = __struct(_GS, 0, [_h], [0]);
export var BooleanList = 64 | 2;

export var DoubleList = 64 | 1;

export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var IntegerList = 64 | 1;

export var IntegerSet = 64 | 1;

export var NestedStringList = __list(_NSL, 0, 64 | 0);
export var SparseShortList = __list(
  _SSLp,
  {
    [_s]: 1,
  },
  1
);
export var SparseStringList = __list(
  _SSL,
  {
    [_s]: 1,
  },
  0
);
export var StringList = 64 | 0;

export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var SparseStringMap = __map(
  _SSM,
  {
    [_s]: 1,
  },
  0
);
export var StringListMap = __map(_SLM, 0, 64 | 0);
export var StringMap = 128 | 0;

aws_protocoltests_sharedRegistry.stopCapture();
