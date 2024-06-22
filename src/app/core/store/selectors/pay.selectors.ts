import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPay from '../reducers/pay.reducer';
import { PayState } from '../state';

export const selectAllPayState = createFeatureSelector<PayState>(
  fromPay.payFeatureKey
);

export const selectPayState = createSelector(
  selectAllPayState,
  (state) => state.payItems
);
