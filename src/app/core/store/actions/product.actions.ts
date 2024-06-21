import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/type/interface';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ productItems: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Products Bought',
  props<{ productItems: Product[] }>()
);
