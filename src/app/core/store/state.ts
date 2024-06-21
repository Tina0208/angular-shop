
import { Cart, Coupon, Pay, Product } from "../model/type/interface";

export interface ProductState {
  productItems: Product[];
}

export interface CartState {
  cartItems: Cart[];
}

export interface PayState {
  payItems: Pay[];
}

export interface CouponState {
  couponItems: Coupon[];
}
