const _FE = "FooEnum";
const _GS = "GreetingStruct";
const _IE = "IntegerEnum";
const _SL = "StringList";
const _SM = "StringMap";
const _h = "hi";

// smithy-typescript generated code
import { struct as __struct, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = __struct(_GS, 0, [_h], [0]);
export var StringList = 64 | 0;

export var StringMap = 128 | 0;

aws_protocoltests_sharedRegistry.stopCapture();
