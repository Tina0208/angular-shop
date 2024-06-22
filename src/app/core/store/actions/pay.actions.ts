import { createAction, props } from '@ngrx/store';
import { Pay } from '../../model/type/interface';

export const loadPayData = createAction(
  '[Pay] Load Pays',
  props<{ payItems: Pay[] }>()
);

export const loadPaysSuccess = createAction(
  '[Pay] Load Pays Success',
  props<{ data: any }>()
);

export const loadPaysFailure = createAction(
  '[Pay] Load Pays Failure',
  props<{ error: any }>()
);
