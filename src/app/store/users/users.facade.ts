import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UsersActions from './users.actions';
import {
  isLoading,
  users,
  selectedOptions, totalRecords,
} from './users.selectors';
import { SelectedOptions, UserModel } from '@store/users/models/user.model';
import { UserState } from '@store/users/users.reducer';

@Injectable()
export class UsersFacade {
  public users$: Observable<UserModel[]> = this.store.select(users);
  public selectedOptions$: Observable<SelectedOptions> = this.store.select(selectedOptions);
  public totalRecords$: Observable<number> = this.store.select(totalRecords);
  public isLoading$: Observable<boolean> = this.store.select(isLoading);

  constructor(private store: Store<UserState>) {}

  public loadUsers(): void {
    this.store.dispatch(UsersActions.LoadUserDetails());
  }
  public setSelectedOptions(selectedOptions: SelectedOptions): void {
    this.store.dispatch(UsersActions.SetSelectedOptions(selectedOptions));
  }
  public clearState() {
    this.store.dispatch(UsersActions.ClearState());
  }

  // public clearState(): void {
  //   this.store.dispatch(HelpCenterFaqManagementActions.ClearState());
  // }
}
