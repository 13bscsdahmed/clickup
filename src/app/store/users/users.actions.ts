import { createAction } from '@ngrx/store';
import { SelectedOptions, UserModel } from './models/user.model';

enum ActionType {
  LOAD_USERS_DETAILS = '[Users] Load user details',
  LOAD_USERS_DETAILS_SUCCESS = '[Users] Load user details success',
  LOAD_USERS_DETAILS_ERROR = '[Users] Load user details error',
  SET_SELECTED_OPTIONS = '[Users] Set selected options',
  CLEAR_STATE = '[Users] Clear users state'
}

export const LoadUserDetails = createAction(
  ActionType.LOAD_USERS_DETAILS);

export const LoadUserDetailsSuccess = createAction(
  ActionType.LOAD_USERS_DETAILS_SUCCESS,
  (payload: {data: UserModel[], totalRecords: number}) => ({ payload })
);

export const SetSelectedOptions = createAction(
  ActionType.SET_SELECTED_OPTIONS,
  (payload: SelectedOptions) => ({ payload })
);

export const LoadUserDetailsError = createAction(ActionType.LOAD_USERS_DETAILS_ERROR);

export const ClearState = createAction(ActionType.CLEAR_STATE);

export type UsersActions = ReturnType<
  | typeof LoadUserDetails
  | typeof LoadUserDetailsSuccess
  | typeof LoadUserDetailsError
  | typeof ClearState
  >;
