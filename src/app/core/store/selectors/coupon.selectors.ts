import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCoupon from '../reducers/coupon.reducer';
import { CouponState } from '../state';

export const selectAllCouponState = createFeatureSelector<CouponState>(
  fromCoupon.couponFeatureKey
);

export const selectDeliveryFreeCoupon = createSelector(
  selectAllCouponState,
  (state) => state.couponItems.filter((item) => item.couponType === 'delivery-free')
);

export const selectDiscountCoupon = createSelector(
  selectAllCouponState,
  (state) => state.couponItems.filter((item) => item.couponType !== 'delivery-free')
);
