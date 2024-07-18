import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ProductService } from '../../api/product.service';
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() =>
        this._productService.loadProducts$().pipe(
          map((data) => ProductActions.loadProductsSuccess({ productItems: data })),
          catchError((error) => of(ProductActions.loadProductsFailure({ error: '商品資訊讀取失敗' }))))
      )
    );
  });

  constructor(
    private _actions$: Actions,
    private _productService: ProductService
  ) { }
}
