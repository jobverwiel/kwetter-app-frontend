import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse, HttpEvent, } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthenticationService,
        private snackbarService: MatSnackBar
        ) { }
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const token = this.authService.getAuthorizationToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.cookie}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401 && error.url?.indexOf('authentication/login') === -1) {
                this.authService.logout();
                this.snackbarService.open("Your session has expired!", undefined, {
                  panelClass: 'error-snack',
                  duration: 2500
                });
              }
              return throwError(error);
            })
          );
        }
    }

