import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iif, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Page } from 'src/app/core/model/class/page.component';
import { Product } from 'src/app/core/model/type/interface';
import { addCart } from 'src/app/core/store/actions/cart.actions';
import { loadProducts } from 'src/app/core/store/actions/product.actions';
import { selectCartState } from 'src/app/core/store/selectors/cart.selectors';
import { selectProductState } from 'src/app/core/store/selectors/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends Page implements OnInit {
  productList: Product[] = [];

  constructor(
    private _store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadProductDate();
    this.scrollToTop();
  }

  private _loadProductDate() {
    this._store.dispatch(loadProducts());
    this._store.select(selectProductState).subscribe((data) => {
      this.productList = data;
    });
  }

  addCart({ productId, count }: { productId: string, count: number }) {
    const productEnough$ = this._store.select(selectCartState).pipe(
      map((data) => (data.find((item) => item.productId === productId))),
      switchMap((res) =>
        iif(() =>
          res === undefined || (res.productCount > +res.productCartCount + count),
          of(true),
          of(false)
        )),
    );

    productEnough$.pipe(
      filter((res) => res),
      take(1),
    ).subscribe(() => {
      const addedProduct = this.productList.find((product) => product.productId === productId)!;
      this._store.dispatch(addCart({
        ...addedProduct,
        productCartCount: count
      }));
    });
  }
}
