import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface ApiRes<t> {
  data: t;
  meta?: Meta | null;
}
export interface Meta {
  totalCount?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private http: HttpClient) { }

  // Base Http get call
  public get(url: string, params?: any, headersOverrides = {}, wrapperKey?: any) {
    const options = {
      headers: this.createHeaders(headersOverrides),
      params: this.parseParams(params, wrapperKey),
      observe: 'response' as 'response'
    };

    return this.http.get(url, options).pipe(
      map((res) => {
        return {
          data: res.body,
          meta: {
            totalCount: +(res?.headers?.get('X-Total-Count')) || null
          }
        };
      })
    );
  }

  /**
   * create default http headers for Content-Type, Accept
   */
  private createHeaders(headersOverrides = {}): HttpHeaders {
    const headersObj = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
    if (headersOverrides) {
      Object.keys(headersOverrides).forEach((key) => {
        headersObj[key] = headersOverrides[key];
      });
    }
    Object.assign(headersObj, headersOverrides);

    return new HttpHeaders(headersObj);
  }
  /**
   * create {URLSearchParams} for http requests
   */
  private parseParams(params: any, wrapperKey = null): HttpParams {
    let httpQuery: HttpParams = new HttpParams();

    if (wrapperKey) {
      Object.keys(params || []).forEach(param => {
        // Exception added for json server
        if (param === 'q') {
          httpQuery = httpQuery.append(`${param}`, params[param]);
        } else {
          httpQuery = httpQuery.append(`${wrapperKey}${param}`, params[param]);
        }
      });
    } else {
      Object.keys(params || []).forEach(param => {
        httpQuery = httpQuery.append(`${param}`, params[param]);
      });
    }
    return httpQuery;
  }
}
