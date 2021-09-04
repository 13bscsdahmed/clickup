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
    return this.baseHttpService.get(`${this.baseUrl}`, { page: 1, limit: 2}, {}, '_').pipe(map(res => {
      return {
        data: res.data as UserModel[],
        meta: res.meta
      };
    }));
  }
}
