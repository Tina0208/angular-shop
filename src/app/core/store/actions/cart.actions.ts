import { createAction, props } from '@ngrx/store';
import { Cart } from '../../model/type/interface';

export const addCart = createAction(
  '[Cart] Add Cart',
  props<Cart>()
)

export const inputCount = createAction(
  '[Cart] input count of product in cart',
  props<Cart>()
)

export const plusOneProduct = createAction(
  '[Cart] plus one product to cart',
  props<Cart>()
)

export const minusOneProudct = createAction(
  '[Cart] minus one product to cart',
  props<Cart>()
);

export const deleteProduct = createAction(
  '[Cart] delete product from cart',
  props<{ id: string }>()
);

export const buy = createAction(
  '[Cart] buy product',
  props<{ id: string[] }>()
);
