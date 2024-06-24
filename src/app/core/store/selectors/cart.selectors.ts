import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';
import { CartState } from '../state';

export const selectAllCartState = createFeatureSelector<CartState>(
  fromCart.cartFeatureKey
);

export const selectCartState = createSelector(
  selectAllCartState,
  (state) => state.cartItems
)

export const isProductEnough = (productId: string, count: number) => createSelector(
  selectAllCartState,
  (state) => {
    const itemInCart = state.cartItems.find((item) => item.productId === productId);
    return !itemInCart || (itemInCart.productCount >= +itemInCart.productCartCount + count)
  }
);
