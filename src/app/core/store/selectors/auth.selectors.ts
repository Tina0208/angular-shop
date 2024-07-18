import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import { UserState } from '../state';

export const selectAuthState = createFeatureSelector<UserState>(
  fromAuth.authFeatureKey
);

export const selectUserState = createSelector(
  selectAuthState,
  (state) => state.token
)
