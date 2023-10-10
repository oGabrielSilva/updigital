export interface KeyToString {
  [key: string]: string;
}

export abstract class Service {
  public abstract boot(): void;
}
