import { Client, Command, MetadataBearer, PaginationConfiguration, Paginator } from "@aws-sdk/types";

/**
 * Manufacture a paginator for a service/client request that follows a pagination pattern.
 *
 * @param setInputNextToken - sets each page request's token.
 * @param getPageNextToken - gets each page response's next token.
 * @param setPageSize - sets page size on the requests.
 * @param ServiceCtor - full client.
 * @param serviceMethod - method of the full client.
 * @param ClientCtor - thin client.
 * @param CommandCtor - Command to use in the thin client.
 */
export function createPaginator<
  Input extends object,
  Output extends MetadataBearer,
  Service extends Client<Input, Output, unknown>,
  Token
>({
  setInputNextToken,
  getPageNextToken,
  setInputPageSize,
  ServiceCtor,
  serviceMethod,
  ClientCtor,
  CommandCtor,
}: {
  setInputNextToken(input: Input, token: Token): void;
  getPageNextToken(page: Output): Token;
  setInputPageSize(input: Input, pageSize: number): void;
  ServiceCtor: { new (...args: unknown[]): Service };
  serviceMethod: string;
  ClientCtor: { new (...args: unknown[]): Client<Input, Output, unknown> };
  CommandCtor: { new (input: Input): Command<Input, Input, Output, Output, unknown> };
}): (config: PaginationConfiguration, input: Input, ...args: any[]) => Paginator<Output> {
  return async function* (config: PaginationConfiguration, input: Input, ...args: any[]): Paginator<Output> {
    let token: Token | undefined = config.startingToken || undefined;
    let hasNext = true;
    let page: Output;
    const client: Client<Input, Output, unknown> = config.client;
    while (hasNext) {
      setInputNextToken(input, token);
      setInputPageSize(input, config.pageSize);
      if (client instanceof ServiceCtor) {
        page = await (
          client[serviceMethod as keyof typeof client] as unknown as (input: Input, ...args: any[]) => Output
        )(input, ...args);
      } else if (client instanceof ClientCtor) {
        page = await client.send(new CommandCtor(input), ...args);
      } else {
        throw new Error(`Invalid client, expected ${ServiceCtor.name} | ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = getPageNextToken(page);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    // @ts-ignore
    return undefined;
  };
}
