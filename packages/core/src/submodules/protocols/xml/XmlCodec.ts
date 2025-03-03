import { Codec, ShapeDeserializer, ShapeSerializer } from "@smithy/types";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";
import { XmlShapeDeserializer } from "./XmlShapeDeserializer";
import { XmlShapeSerializer } from "./XmlShapeSerializer";

export class XmlCodec extends SerdeContextConfig implements Codec<string, Uint8Array | string> {
  public constructor(
    public readonly xmlNamespace: string,
    public readonly serviceNamespace: string,
  ) {
    super();
  }

  public createSerializer(): ShapeSerializer<string> {
    const serializer = new XmlShapeSerializer(this.xmlNamespace);
    serializer.setSerdeContext(this.serdeContext!);
    return serializer;
  }
  public createDeserializer(): ShapeDeserializer<string> {
    const deserializer = new XmlShapeDeserializer(this.serviceNamespace);
    deserializer.setSerdeContext(this.serdeContext!);
    return deserializer;
  }
}
