export interface Product {
  productId: string,
  productName: string,
  productDescription: string,
  productCount: number,
  productPrice: number,
  productImage: string
}

export interface Cart extends Omit<Product, 'productDescription'> {
  productCartCount: number
}

export interface Pay extends Cart { }

export interface Coupon {
  couponId: string,
  couponName: string,
  couponDescription: string,
  couponType: 'delivery-free' | 'discount' | 'price-off',
  limit: number,
  deliveryFree?: boolean,
  discount?: number,
  priceOff?: number
}
