import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { SelectedOptions, UserModel } from './models/user.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SortOrder } from '@common/elements/custom-table/models';

export const FEATURE_NAME = 'Users';

export interface UserState extends EntityState<UserModel>{
  loading: boolean;
  totalRecords: number;
  selectedOptions: SelectedOptions;
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: UserState = adapter.getInitialState({
  selectedOptions: {
    page: 0,
    limit: 10,
    search: '',
    order: null,
    sort: null
  },
  totalRecords: 0,
  loading: false
});

export const usersReducer: ActionReducer<UserState, Action> = createReducer(
  initialState,
  on(UsersActions.LoadUserDetails, (state: UserState) => ({
    ...state,
    // loading: true,
  })),
  on(UsersActions.LoadUserDetailsSuccess, (state: UserState, { payload }) => {
    const others = {
      ...state,
      totalRecords: payload.totalRecords,
      // loading: false
    };
    return adapter.setAll(payload.data, others);
  }),
  on(UsersActions.SetSelectedOptions, (state: UserState, { payload }) => ({
    ...state,
    selectedOptions: payload
  })),
  on(UsersActions.LoadUserDetailsError, (state: UserState) => ({
    ...state,
    totalRecords: 0,
    // loading: false,
  })),
);

export const { selectAll } = adapter.getSelectors();
export const getLoading = (state: UserState) => state.loading;
export const getSelectedOptions = (state: UserState) => state.selectedOptions;
export const getTotalRecords = (state: UserState) => state.totalRecords;
