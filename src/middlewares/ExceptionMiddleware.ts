import { HTTPStatus } from '../api/HTTPStatus';
import { ResponseBody } from '../api/ResponseBody';
import { InternalServerErrorException } from '../exceptions/InternalServerErrorException';

export class ExceptionMiddleware {
  public static resolve(err: unknown, req: Req, res: Res, next: Next) {
    if (err instanceof InternalServerErrorException)
      res
        .status(err.status)
        .json(new ResponseBody(true, null, err.causedBy, err.status, err.timestamp));
    else
      res
        .status(HTTPStatus.INTERNAL_SERVER_ERROR)
        .json(
          new ResponseBody(
            true,
            null,
            res.locals.strings?.internalServerExceptionDefaultMessage || '',
            HTTPStatus.INTERNAL_SERVER_ERROR,
            Date.now()
          )
        );
    next();
  }
}
