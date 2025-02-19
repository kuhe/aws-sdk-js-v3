import type { ConfigurableSerdeContext, SerdeContext } from "@smithy/types";

/**
 * @internal
 */
export class SerdeContextConfig implements ConfigurableSerdeContext {
  protected serdeContext?: SerdeContext;

  public setSerdeContext(serdeContext: SerdeContext): void {
    this.serdeContext = serdeContext;
  }
}
