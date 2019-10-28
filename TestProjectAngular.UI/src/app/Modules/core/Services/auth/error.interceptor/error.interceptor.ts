import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { flatMap } from 'rxjs/operators';

import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        debugger;
        this.authService.refreshAccessToken().subscribe(
          (data: any) => {
            debugger;
            //If reload successful update tokens
            if (data.isSuccess === true) {
              //Update tokens
              let currentUser = this.authService.currentUserValue;
              currentUser.accessToken = data.accessToken;
              currentUser.refreshToken = data.refreshToken;
              this.authService.updateCurrentUserValue(currentUser);
              debugger;
              //Clone our fieled request ant try to resend it
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${currentUser.accessToken}`
                }
              });
              return next.handle(request).pipe(catchError(err => {
                debugger;
                return throwError(err);
              }));
            } else {
              debugger;
              this.authService.logout();
              location.reload(true);
            }
          }
        );
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
