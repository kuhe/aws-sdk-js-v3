const _CE = "ComplexError";
const _CE_ = "Content-Encoding";
const _CNED = "ComplexNestedErrorData";
const _COD = "ClientOptionalDefaults";
const _CTP = "ContentTypeParameters";
const _CTPI = "ContentTypeParametersInput";
const _CTPO = "ContentTypeParametersOutput";
const _D = "Defaults";
const _DL = "DialogList";
const _DM = "DialogMap";
const _Di = "Dialog";
const _EIAEO = "EmptyInputAndEmptyOutput";
const _EIAEOI = "EmptyInputAndEmptyOutputInput";
const _EIAEOO = "EmptyInputAndEmptyOutputOutput";
const _EO = "EndpointOperation";
const _EWHLO = "EndpointWithHostLabelOperation";
const _EWHLOI = "EndpointWithHostLabelOperationInput";
const _F = "Foo";
const _FE = "FooError";
const _Fa = "Farewell";
const _Fo = "Fooooo";
const _GWE = "GreetingWithErrors";
const _GWEI = "GreetingWithErrorsInput";
const _GWEO = "GreetingWithErrorsOutput";
const _HWPO = "HostWithPathOperation";
const _IG = "InvalidGreeting";
const _JU = "JsonUnions";
const _JUI = "JsonUnionsInput";
const _JUO = "JsonUnionsOutput";
const _M = "Message";
const _MU = "MyUnion";
const _N = "Nested";
const _NIANO = "NoInputAndNoOutput";
const _NIAO = "NoInputAndOutput";
const _NIAOO = "NoInputAndOutputOutput";
const _OWD = "OperationWithDefaults";
const _OWDI = "OperationWithDefaultsInput";
const _OWDO = "OperationWithDefaultsOutput";
const _OWNS = "OperationWithNestedStructure";
const _OWNSI = "OperationWithNestedStructureInput";
const _OWNSO = "OperationWithNestedStructureOutput";
const _OWRM = "OperationWithRequiredMembers";
const _OWRMO = "OperationWithRequiredMembersOutput";
const _OWRMWD = "OperationWithRequiredMembersWithDefaults";
const _OWRMWDO = "OperationWithRequiredMembersWithDefaultsOutput";
const _PWCE = "PutWithContentEncoding";
const _PWCEI = "PutWithContentEncodingInput";
const _RE = "RequiredEnum";
const _RIE = "RequiredIntEnum";
const _RSL = "RequiredStringList";
const _RSM = "RequiredStringMap";
const _SSP = "SimpleScalarProperties";
const _SSPI = "SimpleScalarPropertiesInput";
const _SSPO = "SimpleScalarPropertiesOutput";
const _TE = "TestEnum";
const _TIE = "TestIntEnum";
const _TL = "TopLevel";
const _TSL = "TestStringList";
const _TSM = "TestStringMap";
const _bV = "booleanValue";
const _bVl = "blobValue";
const _c = "client";
const _cOD = "clientOptionalDefaults";
const _co = "contents";
const _d = "defaults";
const _dB = "defaultBoolean";
const _dBe = "defaultBlob";
const _dBef = "defaultByte";
const _dD = "defaultDouble";
const _dDB = "defaultDocumentBoolean";
const _dDL = "defaultDocumentList";
const _dDM = "defaultDocumentMap";
const _dDS = "defaultDocumentString";
const _dE = "defaultEnum";
const _dF = "defaultFloat";
const _dI = "defaultInteger";
const _dIE = "defaultIntEnum";
const _dL = "defaultList";
const _dLe = "defaultLong";
const _dLi = "dialogList";
const _dM = "defaultMap";
const _dMi = "dialogMap";
const _dND = "defaultNullDocument";
const _dS = "defaultString";
const _dSe = "defaultShort";
const _dT = "defaultTimestamp";
const _dV = "doubleValue";
const _da = "data";
const _di = "dialog";
const _e = "error";
const _eB = "emptyBlob";
const _eS = "emptyString";
const _eV = "enumValue";
const _en = "encoding";
const _f = "farewell";
const _fB = "falseBoolean";
const _fV = "floatValue";
const _g = "greeting";
const _hH = "httpHeader";
const _hL = "hostLabel";
const _iEV = "intEnumValue";
const _jN = "jsonName";
const _l = "language";
const _lV = "listValue";
const _la = "label";
const _m = "member";
const _mV = "mapValue";
const _nV = "numberValue";
const _oTLD = "otherTopLevelDefault";
const _p = "phrase";
const _rB = "requiredBoolean";
const _rBe = "requiredBlob";
const _rBeq = "requiredByte";
const _rD = "requiredDouble";
const _rE = "requiredEnum";
const _rF = "requiredFloat";
const _rI = "requiredInteger";
const _rIE = "requiredIntEnum";
const _rL = "requiredList";
const _rLe = "requiredLong";
const _rM = "requiredMap";
const _rS = "requiredString";
const _rSe = "requiredShort";
const _rT = "requiredTimestamp";
const _s = "server";
const _sV = "stringValue";
const _sVt = "structureValue";
const _tL = "topLevel";
const _tLD = "topLevelDefault";
const _tV = "timestampValue";
const _v = "value";
const _zB = "zeroByte";
const _zD = "zeroDouble";
const _zF = "zeroFloat";
const _zI = "zeroInteger";
const _zL = "zeroLong";
const _zS = "zeroShort";

// smithy-typescript generated code
import {
  error as __error,
  list as __list,
  map as __map,
  op as __op,
  struct as __struct,
  struct as __uni,
  TypeRegistry,
} from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import { GreetingStruct, StringList, StringMap } from "./aws.protocoltests.shared";
import { Document, Unit } from "./smithy.api";

/* eslint no-var: 0 */

export const aws_protocoltests_json10Registry = TypeRegistry.for("aws.protocoltests.json10");
aws_protocoltests_json10Registry.startCapture();
export var ClientOptionalDefaults = __struct(_COD, 0, [_m], [1]);
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
export var Defaults = __struct(
  _D,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var Dialog = __struct(_Di, 0, [_l, _g, _f], [0, 0, () => Farewell]);
export var EmptyInputAndEmptyOutputInput = __struct(_EIAEOI, 0, [], []);
export var EmptyInputAndEmptyOutputOutput = __struct(_EIAEOO, 0, [], []);
export var EndpointWithHostLabelOperationInput = __struct(
  _EWHLOI,
  0,
  [_la],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ]
);
export var Farewell = __struct(_Fa, 0, [_p], [0]);
export var FooError = __error(
  _FE,
  {
    [_e]: _s,
  },
  [],
  [],

  __FooError
);
export var GreetingWithErrorsInput = __struct(_GWEI, 0, [_g], [0]);
export var GreetingWithErrorsOutput = __struct(_GWEO, 0, [_g], [0]);
export var InvalidGreeting = __error(
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var JsonUnionsInput = __struct(_JUI, 0, [_co], [() => MyUnion]);
export var JsonUnionsOutput = __struct(_JUO, 0, [_co], [() => MyUnion]);
export var NoInputAndOutputOutput = __struct(_NIAOO, 0, [], []);
export var OperationWithDefaultsInput = __struct(
  _OWDI,
  0,
  [_d, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1]
);
export var OperationWithDefaultsOutput = __struct(
  _OWDO,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var OperationWithNestedStructureInput = __struct(_OWNSI, 0, [_tL], [() => TopLevel]);
export var OperationWithNestedStructureOutput = __struct(
  _OWNSO,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap]
);
export var OperationWithRequiredMembersOutput = __struct(
  _OWRMO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0]
);
export var OperationWithRequiredMembersWithDefaultsOutput = __struct(
  _OWRMWDO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM, _rE, _rIE],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1]
);
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
export var SimpleScalarPropertiesInput = __struct(_SSPI, 0, [_fV, _dV], [1, 1]);
export var SimpleScalarPropertiesOutput = __struct(_SSPO, 0, [_fV, _dV], [1, 1]);
export var TopLevel = __struct(_TL, 0, [_di, _dLi, _dMi], [() => Dialog, () => DialogList, () => DialogMap]);
export var DialogList = __list(_DL, 0, () => Dialog);
export var RequiredStringList = 64 | 0;

export var TestStringList = 64 | 0;

export var DialogMap = __map(_DM, 0, () => Dialog);
export var RequiredStringMap = 128 | 0;

export var TestStringMap = 128 | 0;

export var MyUnion = __uni(
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _iEV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 1, 64 | 0, 128 | 0, () => GreetingStruct]
);
export var ContentTypeParameters = __op(
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput
);
export var EmptyInputAndEmptyOutput = __op(
  _EIAEO,
  0,
  () => EmptyInputAndEmptyOutputInput,
  () => EmptyInputAndEmptyOutputOutput
);
export var EndpointOperation = __op(
  _EO,
  0,
  () => Unit,
  () => Unit
);
export var EndpointWithHostLabelOperation = __op(
  _EWHLO,
  0,
  () => EndpointWithHostLabelOperationInput,
  () => Unit
);
export var GreetingWithErrors = __op(
  _GWE,
  2,
  () => GreetingWithErrorsInput,
  () => GreetingWithErrorsOutput
);
export var HostWithPathOperation = __op(
  _HWPO,
  0,
  () => Unit,
  () => Unit
);
export var JsonUnions = __op(
  _JU,
  2,
  () => JsonUnionsInput,
  () => JsonUnionsOutput
);
export var NoInputAndNoOutput = __op(
  _NIANO,
  0,
  () => Unit,
  () => Unit
);
export var NoInputAndOutput = __op(
  _NIAO,
  0,
  () => Unit,
  () => NoInputAndOutputOutput
);
export var OperationWithDefaults = __op(
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var OperationWithNestedStructure = __op(
  _OWNS,
  0,
  () => OperationWithNestedStructureInput,
  () => OperationWithNestedStructureOutput
);
export var OperationWithRequiredMembers = __op(
  _OWRM,
  0,
  () => Unit,
  () => OperationWithRequiredMembersOutput
);
export var OperationWithRequiredMembersWithDefaults = __op(
  _OWRMWD,
  0,
  () => Unit,
  () => OperationWithRequiredMembersWithDefaultsOutput
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
  () => SimpleScalarPropertiesInput,
  () => SimpleScalarPropertiesOutput
);
aws_protocoltests_json10Registry.stopCapture();
