import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { ProductState } from '../state';

export const productFeatureKey = 'product';
export const initialState: ProductState = {
  productItems: []
};

export const productReducer = createReducer(
  initialState,

  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state, action) => ({
    ...state,
    ...action
  })),
);
