import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CouponService } from '../../api/coupon.service';
import * as CouponActions from '../actions/coupon.actions';


@Injectable()
export class CouponEffects {
  loadCoupons$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CouponActions.loadCoupons),
      concatMap(() => this._couponService.loadCoupons$().pipe(
        map((data) => CouponActions.loadCouponsSuccess({ couponItems: data })),
        catchError((_) => of(CouponActions.loadCouponsFailure({error: '優惠券讀取失敗'})))
      ))
    );
  });

  constructor(
    private _actions$: Actions,
    private _couponService: CouponService) { }
}
