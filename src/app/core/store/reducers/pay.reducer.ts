import { Action, createReducer, on } from '@ngrx/store';
import * as PayActions from '../actions/pay.actions';
import { PayState } from '../state';

export const payFeatureKey = 'pay';
export const initialState: PayState = {
  payItems: []
};

export const payReducer = createReducer(
  initialState,

  on(PayActions.loadPayData, (state, action) => ({
    ...state,
    payItems: [...action.payItems]
  })),
  on(PayActions.loadPaysSuccess, (state, action) => state),
  on(PayActions.loadPaysFailure, (state, action) => state),
);
