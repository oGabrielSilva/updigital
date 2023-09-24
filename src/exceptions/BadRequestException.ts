import { HTTPStatus } from '../api/HTTPStatus';
import { InternalServerErrorException } from './InternalServerErrorException';

export class BadRequestException extends InternalServerErrorException {
  public constructor(
    message = 'the server cannot or will not process the request due to something that is perceived to be a client error'
  ) {
    super(message, HTTPStatus.BAD_REQUEST);
  }
}
