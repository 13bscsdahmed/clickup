import { Action, ActionReducer, createReducer, on, State } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { SelectedOptions, UserModel } from './models/user.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const FEATURE_NAME = 'Users';

export interface UserState extends EntityState<UserModel>{
  loading: boolean;
  totalRecords: number;
  selectedOptions: SelectedOptions;
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: UserState = adapter.getInitialState({
  selectedOptions: {
    page: 1,
    limit: 10,
    q: '',
    order: null,
    sort: null
  },
  totalRecords: 0,
  loading: false
});

export const usersReducer: ActionReducer<UserState, Action> = createReducer(
  initialState,
  on(UsersActions.LoadUserDetails, (state: UserState): UserState => ({
    ...state,
    loading: true
  })),
  on(UsersActions.LoadUserDetailsSuccess, (state: UserState, { payload }): UserState => {
    const others = {
      ...state,
      totalRecords: payload.totalRecords,
      loading: false
    };
    return adapter.setAll(payload.data, others);
  }),
  on(UsersActions.SetSelectedOptions, (state: UserState, { payload }): UserState => ({
    ...state,
    selectedOptions: payload
  })),
  on(UsersActions.LoadUserDetailsError, (state: UserState): UserState => ({
    ...state,
    totalRecords: 0,
    loading: false,
  })),
  on(UsersActions.ClearState, (state: UserState): UserState => ({
    ...state,
    ...initialState
  })),
);

export const { selectAll } = adapter.getSelectors();
export const getLoading = (state: UserState) => state.loading;
export const getSelectedOptions = (state: UserState) => state.selectedOptions;
export const getTotalRecords = (state: UserState) => state.totalRecords;
