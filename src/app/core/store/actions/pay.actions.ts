import { createAction, props } from '@ngrx/store';

export const loadPays = createAction(
  '[Pay] Load Pays'
);

export const loadPaysSuccess = createAction(
  '[Pay] Load Pays Success',
  props<{ data: any }>()
);

export const loadPaysFailure = createAction(
  '[Pay] Load Pays Failure',
  props<{ error: any }>()
);
