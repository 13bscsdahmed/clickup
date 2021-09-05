import { Injectable } from '@angular/core';
import { ApiRes, BaseHttpService } from '@common/api-service/base-http.service';
import { Observable } from 'rxjs';
import { SelectedOptions, UserModel } from '../../../store/users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  get baseUrl() {
    return `/users`;
  }
  constructor(private baseHttpService: BaseHttpService) { }

  public getUsers(params: SelectedOptions): Observable<ApiRes<UserModel[]>> {
    const options = { ...params};
    Object.keys(options).forEach((key) => {
      // @ts-ignore
      if (options[key] === null || options[key] === '' || options[key] === undefined) {
        // @ts-ignore
        delete options[key];
      }
    });
    return this.baseHttpService.get(`${this.baseUrl}`, options, {}, '_').pipe(map(res => {
      return {
        data: res.data as UserModel[],
        meta: res.meta
      };
    }));
  }
}
