import {
  FEATURE_NAME,
  getLoading,
  getSelectedOptions, getTotalRecords,
  selectAll,
} from './users.reducer';
import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { UserState } from './users.reducer';

const featureSelector: Selector<UserState, UserState> = createFeatureSelector<
  UserState
  >(FEATURE_NAME);

export const users = createSelector(featureSelector, selectAll);
export const selectedOptions = createSelector(featureSelector, getSelectedOptions);
export const isLoading = createSelector(featureSelector, getLoading);
export const totalRecords = createSelector(featureSelector, getTotalRecords);
