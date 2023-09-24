import { HTTPStatus } from '../api/HTTPStatus';

export class InternalServerErrorException extends Error {
  readonly timestamp = Date.now();
  readonly causedBy;

  public constructor(
    message: string = 'the server encountered an unexpected condition that prevented it from fulfilling the request',
    readonly status = HTTPStatus.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.causedBy = message;
  }
}
