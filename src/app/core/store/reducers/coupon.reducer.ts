import { Action, createReducer, on } from '@ngrx/store';
import * as CouponActions from '../actions/coupon.actions';
import { CouponState } from '../state';

export const couponFeatureKey = 'coupon';
export const initialState: CouponState = {
  couponItems: []
};

export const couponReducer = createReducer(
  initialState,

  on(CouponActions.loadCoupons, state => state),
  on(CouponActions.selectCoupon, (state, action) => ({
    ...state,
    couponItems: [action]
  })),
  on(CouponActions.loadCouponsSuccess, (state, action) => ({
    ...state,
    ...action
  })),
  on(CouponActions.loadCouponsFailure, (state, action) => state),

);
