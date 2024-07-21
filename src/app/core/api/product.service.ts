import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Pay, Product } from '../model/type/interface';
import { selectProductState } from '../store/selectors/product.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApiUrl = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient,
    private _store: Store
  ) { }

  loadProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }

  updateProducts$(productsBought: Pay[]): Observable<Product[]> {
    const buyListIds = productsBought.map(buyProduct => buyProduct.productId);

    return this._store.select(selectProductState).pipe(
      switchMap((products) => (
        products
          .filter(product =>
            buyListIds.indexOf(product.productId) !== -1)
          .map(product => ({
            ...product,
            productCount: product.productCount - productsBought[buyListIds.indexOf(product.productId)].productCartCount
          }))
      )),
      switchMap((product) =>
        this.http.put<Product[]>(`${this.productApiUrl}/${product.productId}`, product))
    );
  }
}
