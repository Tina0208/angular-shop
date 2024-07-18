import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { UserState } from '../state';

export const authFeatureKey = 'auth';

export const initialState: UserState = {
  token: null
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => state),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    ...action
  })),
  on(AuthActions.loginFailure, (state, action) => state),
  on(AuthActions.logout, (state, action) => ({
    ...state,
    token: null
  })),
);
