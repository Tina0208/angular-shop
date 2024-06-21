import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';
import { ProductState } from '../state';

export const selectProductAllState = createFeatureSelector<ProductState>(
  fromProduct.productFeatureKey
);

export const selectProductState = createSelector(
  selectProductAllState,
  (state) => state.productItems
)
