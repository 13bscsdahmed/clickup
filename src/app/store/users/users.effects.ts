import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { UserState as State } from './users.reducer';
import { Observable, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { getSelectedOptions } from './users.reducer';
import { ToastrService } from 'ngx-toastr';
import { constants } from '../../config/app.constants';
import { SelectedOptions } from './models/user.model';
import { UsersService } from '@common/api-service/users/users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private usersService: UsersService,
    private toastrService: ToastrService
  ) {}

  loadUsersDetails$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.LoadUserDetails),
      withLatestFrom(
        this.store$.select(getSelectedOptions)
      ),
      switchMap(([_, selectedOptions]) => this.loadUserDetails(selectedOptions))
    )
  );

  private loadUserDetails(selectedOptions: SelectedOptions): Observable<Action> {
    return this.usersService.getUsers(selectedOptions).pipe(
      map(({ data, meta }) => UsersActions.LoadUserDetailsSuccess({data, totalRecords: meta?.totalCount ||  0})),
      catchError((error: HttpErrorResponse) => {
        this.toastrService.error('An error occurred loading users.', constants.toast.types.errorToast);

        return of(UsersActions.LoadUserDetailsError());
      })
    );
  }

}
