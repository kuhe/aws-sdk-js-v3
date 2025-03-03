const _B = "Blob";
const _Bo = "Boolean";
const _C = "Code";
const _CD = "ComplexData";
const _CE = "ComplexError";
const _CE_ = "Content-Encoding";
const _CNED = "ComplexNestedErrorData";
const _CTP = "ContentTypeParameters";
const _CTPI = "ContentTypeParametersInput";
const _CTPO = "ContentTypeParametersOutput";
const _D = "Double";
const _DO = "DatetimeOffsets";
const _DOO = "DatetimeOffsetsOutput";
const _EO = "EmptyOperation";
const _EOn = "EndpointOperation";
const _ES = "EmptyStruct";
const _EWHLO = "EndpointWithHostLabelOperation";
const _EWM = "ErrorWithMembers";
const _EWMr = "ErrorWithoutMembers";
const _F = "Foo";
const _FE = "FooError";
const _FS = "FractionalSeconds";
const _FSO = "FractionalSecondsOutput";
const _Fl = "Float";
const _Fo = "Fooooo";
const _GWE = "GreetingWithErrors";
const _GWEO = "GreetingWithErrorsOutput";
const _HLI = "HostLabelInput";
const _HT = "HttpdateTimestamp";
const _HWPO = "HostWithPathOperation";
const _I = "Integer";
const _IF = "IntegerField";
const _IG = "InvalidGreeting";
const _IT = "Iso8601Timestamp";
const _JE = "JsonEnums";
const _JEIO = "JsonEnumsInputOutput";
const _JIE = "JsonIntEnums";
const _JIEIO = "JsonIntEnumsInputOutput";
const _JU = "JsonUnions";
const _JV = "JsonValue";
const _KS = "KitchenSink";
const _KSO = "KitchenSinkOperation";
const _L = "Long";
const _LF = "ListField";
const _LOKS = "ListOfKitchenSinks";
const _LOL = "ListOfLists";
const _LOLOS = "ListOfListOfStrings";
const _LOMOS = "ListOfMapsOfStrings";
const _LOS = "ListOfStrings";
const _LOSi = "ListOfStructs";
const _M = "Message";
const _MF = "MapField";
const _MOKS = "MapOfKitchenSinks";
const _MOLOS = "MapOfListsOfStrings";
const _MOM = "MapOfMaps";
const _MOMOS = "MapOfMapOfStrings";
const _MOS = "MapOfStrings";
const _MOSa = "MapOfStructs";
const _MU = "MyUnion";
const _N = "Nested";
const _NO = "NullOperation";
const _NOIO = "NullOperationInputOutput";
const _OWOIO = "OperationWithOptionalInputOutput";
const _OWOIOI = "OperationWithOptionalInputOutputInput";
const _OWOIOO = "OperationWithOptionalInputOutputOutput";
const _PAGID = "PutAndGetInlineDocuments";
const _PAGIDIO = "PutAndGetInlineDocumentsInputOutput";
const _PWCE = "PutWithContentEncoding";
const _PWCEI = "PutWithContentEncodingInput";
const _RL = "RecursiveList";
const _RM = "RecursiveMap";
const _RMe = "RenamedMember";
const _RS = "RecursiveStruct";
const _S = "String";
const _SF = "StringField";
const _SNO = "SparseNullsOperation";
const _SNOIO = "SparseNullsOperationInputOutput";
const _SS = "SimpleStruct";
const _SSP = "SimpleScalarProperties";
const _SSPIO = "SimpleScalarPropertiesInputOutput";
const _SWJN = "StructWithJsonName";
const _T = "Timestamp";
const _TL = "TopLevel";
const _UIO = "UnionInputOutput";
const _UT = "UnixTimestamp";
const _V = "Value";
const _a = "application/json";
const _bV = "booleanValue";
const _bVl = "blobValue";
const _c = "client";
const _co = "contents";
const _d = "datetime";
const _dV = "doubleValue";
const _da = "data";
const _e = "error";
const _eV = "enumValue";
const _en = "encoding";
const _fE = "fooEnum1";
const _fEL = "fooEnumList";
const _fEM = "fooEnumMap";
const _fES = "fooEnumSet";
const _fEo = "fooEnum2";
const _fEoo = "fooEnum3";
const _fV = "floatValue";
const _g = "greeting";
const _hH = "httpHeader";
const _hL = "hostLabel";
const _iD = "inlineDocument";
const _iE = "intEnum1";
const _iEL = "intEnumList";
const _iEM = "intEnumMap";
const _iES = "intEnumSet";
const _iEn = "intEnum2";
const _iEnt = "intEnum3";
const _jN = "jsonName";
const _l = "label";
const _lV = "listValue";
const _mT = "mediaType";
const _mV = "mapValue";
const _nV = "numberValue";
const _s = "server";
const _sSL = "sparseStringList";
const _sSM = "sparseStringMap";
const _sV = "stringValue";
const _sVt = "structureValue";
const _st = "string";
const _tV = "timestampValue";
const _v = "value";

// smithy-typescript generated code
import {
  error as __error,
  list as __list,
  map as __map,
  op as __op,
  sim as __sim,
  struct as __struct,
  struct as __uni,
  TypeRegistry,
} from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  ErrorWithMembers as __ErrorWithMembers,
  ErrorWithoutMembers as __ErrorWithoutMembers,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import {
  FooEnumList,
  FooEnumMap,
  FooEnumSet,
  GreetingStruct,
  IntegerEnumList,
  IntegerEnumMap,
  IntegerEnumSet,
  SparseStringList,
  SparseStringMap,
  StringList,
  StringMap,
} from "./aws.protocoltests.shared";
import { Unit } from "./smithy.api";

/* eslint no-var: 0 */

export const aws_protocoltests_jsonRegistry = TypeRegistry.for("aws.protocoltests.json");
aws_protocoltests_jsonRegistry.startCapture();
export var JsonValue = __sim(_JV, 0, {
  [_mT]: _a,
});
export var ComplexError = __error(
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, [() => ComplexNestedErrorData, 0]],

  __ComplexError
);
export var ComplexNestedErrorData = __struct(
  _CNED,
  0,
  [_F],
  [
    [
      0,
      {
        [_jN]: _Fo,
      },
    ],
  ]
);
export var ContentTypeParametersInput = __struct(_CTPI, 0, [_v], [1]);
export var ContentTypeParametersOutput = __struct(_CTPO, 0, [], []);
export var DatetimeOffsetsOutput = __struct(_DOO, 0, [_d], [5]);
export var EmptyStruct = __struct(_ES, 0, [], []);
export var ErrorWithMembers = __error(
  _EWM,
  {
    [_e]: _c,
  },
  [_C, _CD, _IF, _LF, _MF, _M, _SF],
  [0, [() => KitchenSink, 0], 1, 64 | 0, 128 | 0, 0, 0],

  __ErrorWithMembers
);
export var ErrorWithoutMembers = __error(
  _EWMr,
  {
    [_e]: _s,
  },
  [],
  [],

  __ErrorWithoutMembers
);
export var FooError = __error(
  _FE,
  {
    [_e]: _s,
  },
  [],
  [],

  __FooError
);
export var FractionalSecondsOutput = __struct(_FSO, 0, [_d], [5]);
export var GreetingWithErrorsOutput = __struct(_GWEO, 0, [_g], [0]);
export var HostLabelInput = __struct(
  _HLI,
  0,
  [_l],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ]
);
export var InvalidGreeting = __error(
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var JsonEnumsInputOutput = __struct(
  _JEIO,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var JsonIntEnumsInputOutput = __struct(
  _JIEIO,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var KitchenSink = __struct(
  _KS,
  0,
  [
    _B,
    _Bo,
    _D,
    _ES,
    _Fl,
    _HT,
    _I,
    _IT,
    _JV,
    _LOL,
    _LOMOS,
    _LOS,
    _LOSi,
    _L,
    _MOLOS,
    _MOM,
    _MOS,
    _MOSa,
    _RL,
    _RM,
    _RS,
    _SS,
    _S,
    _SWJN,
    _T,
    _UT,
  ],
  [
    21,
    2,
    1,
    () => EmptyStruct,
    1,
    4,
    1,
    4,
    [() => JsonValue, 0],
    __list(_LOLOS, 0, 64 | 0),
    __list(_LOMOS, 0, 128 | 0),
    64 | 0,
    () => ListOfStructs,
    1,
    __map(_MOLOS, 0, 64 | 0),
    __map(_MOMOS, 0, 128 | 0),
    128 | 0,
    () => MapOfStructs,
    [() => ListOfKitchenSinks, 0],
    [() => MapOfKitchenSinks, 0],
    [() => KitchenSink, 0],
    () => SimpleStruct,
    0,
    [() => StructWithJsonName, 0],
    4,
    4,
  ]
);
export var NullOperationInputOutput = __struct(_NOIO, 0, [_st], [0]);
export var OperationWithOptionalInputOutputInput = __struct(_OWOIOI, 0, [_V], [0]);
export var OperationWithOptionalInputOutputOutput = __struct(_OWOIOO, 0, [_V], [0]);
export var PutAndGetInlineDocumentsInputOutput = __struct(_PAGIDIO, 0, [_iD], [15]);
export var PutWithContentEncodingInput = __struct(
  _PWCEI,
  0,
  [_en, _da],
  [
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    0,
  ]
);
export var SimpleScalarPropertiesInputOutput = __struct(_SSPIO, 0, [_fV, _dV], [1, 1]);
export var SimpleStruct = __struct(_SS, 0, [_V], [0]);
export var SparseNullsOperationInputOutput = __struct(
  _SNOIO,
  0,
  [_sSL, _sSM],
  [
    [() => SparseStringList, 0],
    [() => SparseStringMap, 0],
  ]
);
export var StructWithJsonName = __struct(
  _SWJN,
  0,
  [_V],
  [
    [
      0,
      {
        [_jN]: _RMe,
      },
    ],
  ]
);
export var UnionInputOutput = __struct(_UIO, 0, [_co], [() => MyUnion]);
export var ListOfKitchenSinks = __list(_LOKS, 0, [() => KitchenSink, 0]);
export var ListOfListOfStrings = __list(_LOLOS, 0, 64 | 0);
export var ListOfMapsOfStrings = __list(_LOMOS, 0, 128 | 0);
export var ListOfStrings = 64 | 0;

export var ListOfStructs = __list(_LOSi, 0, () => SimpleStruct);
export var MapOfKitchenSinks = __map(_MOKS, 0, [() => KitchenSink, 0]);
export var MapOfListsOfStrings = __map(_MOLOS, 0, 64 | 0);
export var MapOfMapOfStrings = __map(_MOMOS, 0, 128 | 0);
export var MapOfStrings = 128 | 0;

export var MapOfStructs = __map(_MOSa, 0, () => SimpleStruct);
export var MyUnion = __uni(
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 64 | 0, 128 | 0, () => GreetingStruct]
);
export var ContentTypeParameters = __op(
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput
);
export var DatetimeOffsets = __op(
  _DO,
  0,
  () => Unit,
  () => DatetimeOffsetsOutput
);
export var EmptyOperation = __op(
  _EO,
  0,
  () => Unit,
  () => Unit
);
export var EndpointOperation = __op(
  _EOn,
  0,
  () => Unit,
  () => Unit
);
export var EndpointWithHostLabelOperation = __op(
  _EWHLO,
  0,
  () => HostLabelInput,
  () => Unit
);
export var FractionalSeconds = __op(
  _FS,
  0,
  () => Unit,
  () => FractionalSecondsOutput
);
export var GreetingWithErrors = __op(
  _GWE,
  2,
  () => Unit,
  () => GreetingWithErrorsOutput
);
export var HostWithPathOperation = __op(
  _HWPO,
  0,
  () => Unit,
  () => Unit
);
export var JsonEnums = __op(
  _JE,
  2,
  () => JsonEnumsInputOutput,
  () => JsonEnumsInputOutput
);
export var JsonIntEnums = __op(
  _JIE,
  2,
  () => JsonIntEnumsInputOutput,
  () => JsonIntEnumsInputOutput
);
export var JsonUnions = __op(
  _JU,
  2,
  () => UnionInputOutput,
  () => UnionInputOutput
);
export var KitchenSinkOperation = __op(
  _KSO,
  0,
  () => KitchenSink,
  () => KitchenSink
);
export var NullOperation = __op(
  _NO,
  0,
  () => NullOperationInputOutput,
  () => NullOperationInputOutput
);
export var OperationWithOptionalInputOutput = __op(
  _OWOIO,
  0,
  () => OperationWithOptionalInputOutputInput,
  () => OperationWithOptionalInputOutputOutput
);
export var PutAndGetInlineDocuments = __op(
  _PAGID,
  0,
  () => PutAndGetInlineDocumentsInputOutput,
  () => PutAndGetInlineDocumentsInputOutput
);
export var PutWithContentEncoding = __op(
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit
);
export var SimpleScalarProperties = __op(
  _SSP,
  0,
  () => SimpleScalarPropertiesInputOutput,
  () => SimpleScalarPropertiesInputOutput
);
export var SparseNullsOperation = __op(
  _SNO,
  0,
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput
);
aws_protocoltests_jsonRegistry.stopCapture();
