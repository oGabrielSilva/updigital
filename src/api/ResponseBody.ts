export class ResponseBody<T> {
  public constructor(
    public readonly error: boolean,
    public readonly body: T,
    public readonly message: string,
    public readonly status: number,
    public readonly timestamp: number
  ) {}
}
