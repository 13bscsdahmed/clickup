import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


// Constants Import
import { constants } from '../../config/app.constants';


@Injectable()
export class InterceptedHttp implements HttpInterceptor {

  constructor() {
  }

  // Intercept all requests
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.cloneRequest(request);
    return next.handle(request).pipe(
      catchError(
        this.onCatch // Catch Error
      ),
      tap(
        this.onSuccess, // Handler for success
        this.onError // Handler for error
      )
    );
  }

  private cloneRequest(request: HttpRequest<any>): HttpRequest<any> {
    if (!request.url.includes('assets')) {  // If not requesting language json file or assets
      request = request.clone({ url: constants.apiBaseUrl + request.url }); // Append api base url to urls passed from requests
    }
    return request;
  }

  /**
   * Error Handler to catch errors that occour during request sending process
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return throwError(error);
  }

  /**
   * Error handler to handle error response
   */
  private onError(error: any): void {
    console.error(error);
  }

  /**
   * Success handler middleware to handle success responses e.g add auth token to local storage
   */
  private onSuccess(response: any): any {}
}
