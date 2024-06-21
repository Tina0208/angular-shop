import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { Cart } from '../../model/type/interface';
import { CartState } from '../state';
import * as _ from 'lodash';

export const cartFeatureKey = 'cart';
export const initialState: CartState = {
  cartItems: []
};

export const cartReducer = createReducer(
  initialState,

  on(CartActions.addCart, (state, action) => {
    const productIndex = getProuductIndex(state, action);
    return productIndex !== -1 ?
      updateProductCount(state, action, 'addCart') :
      addProduct(state, action);
  }),
  on(CartActions.inputCount, (state, action) => {
    return updateProductCount(state, action, 'input');
  }),
  on(CartActions.plusOneProduct, (state, action) => {
    return updateProductCount(state, action, 'plus');
  }),
  on(CartActions.minusOneProudct, (state, action) => {
    return updateProductCount(state, action, 'minus');
  }),
  on(CartActions.deleteProduct, (state, action) => {
    return deleteProduct(state, action.id);
  }),
  on(CartActions.buy, (state, action) => {
    return buy(state, action);
  }),
);

const updateProductCount = (
  state: CartState,
  action: Cart,
  behavior: 'addCart' | 'plus' | 'minus' | 'input'
) => {
  const newState = _.cloneDeep(state);
  const productIndex = getProuductIndex(state, action);
  const updateProduct = newState.cartItems[productIndex];

  switch (behavior) {
    case 'addCart':
      newState.cartItems[productIndex].productCartCount = +updateProduct.productCartCount + +action.productCartCount;
      break;

    case 'plus':
      newState.cartItems[productIndex].productCartCount = +updateProduct.productCartCount + 1;
      break;

    case 'minus':
      newState.cartItems[productIndex].productCartCount = +updateProduct.productCartCount - 1;
      break;

    case 'input':
      newState.cartItems[productIndex].productCartCount = +action.productCartCount;
      break;

    default:
      break;
  }

  return newState;
};

const addProduct = (state: CartState, action: Cart) => ({
  ...state,
  cartItems: [...state.cartItems, action]
});

const deleteProduct = (state: CartState, id: string) => ({
  ...state,
  cartItems: state.cartItems.filter((item) => item.productId !== id)
});

const getProuductIndex = (state: CartState, action: Cart) => {
  return state.cartItems.findIndex((item) => item.productId === action.productId);
};

const buy = (state: CartState, action: { id: string[] }) => ({
  ...state,
  cartItems: state.cartItems.filter((item) => action.id.indexOf(item.productId) === -1)
});
