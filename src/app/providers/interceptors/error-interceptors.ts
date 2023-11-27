import {
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { MESSAGE_400, MESSAGE_401, MESSAGE_403, MESSAGE_404, MESSAGE_405 } from 'src/app/constants/constants';

export function httpErrorResponseInterceptor(
  request: HttpRequest<any>,
  next: HttpHandlerFn
) {
  const _alertService = inject(AlertService);
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      switch (error.status) {
        case 400:
          _alertService.notification(
            MESSAGE_400.icon,
            MESSAGE_400.title,
            MESSAGE_400.message
          );
          break;
        case 401:
          _alertService.notification(
            MESSAGE_401.icon,
            MESSAGE_401.title,
            MESSAGE_401.message
          );
          break;
        case 403:
          _alertService.notification(
            MESSAGE_403.icon,
            MESSAGE_403.title,
            MESSAGE_403.message
          );
          break;
        case 404:
          _alertService.notification(
            MESSAGE_404.icon,
            MESSAGE_404.title,
            MESSAGE_404.message
          );
          break;
        case 405:
          _alertService.notification(
            MESSAGE_405.icon,
            MESSAGE_405.title,
            MESSAGE_405.message
          );
          break;
      }
      return throwError(error);
    })
  );
}
