import { createAction, props } from '@ngrx/store';
import { Coupon } from '../../model/type/interface';

export const loadCoupons = createAction(
  '[Coupon] Load Coupons'
);

export const selectCoupon = createAction(
  '[Coupon] select coupon',
  props<Coupon>()
);

export const loadCouponsSuccess = createAction(
  '[Coupon] Load Coupons Success',
  props<{ couponItems: Coupon[] }>()
);

export const loadCouponsFailure = createAction(
  '[Coupon] Load Coupons Failure',
  props<{ error: string }>()
);
