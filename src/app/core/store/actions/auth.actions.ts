import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[login] login'
);

export const loginSuccess = createAction(
  '[login] Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[login] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[logout] logout'
);
