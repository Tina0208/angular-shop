import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { Page } from 'src/app/core/model/class/page.component';
import { Product } from 'src/app/core/model/type/interface';
import { addCart } from 'src/app/core/store/actions/cart.actions';
import { loadProducts } from 'src/app/core/store/actions/product.actions';
import { isProductEnough } from 'src/app/core/store/selectors/cart.selectors';
import { selectProductState } from 'src/app/core/store/selectors/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends Page implements OnInit {
  productList: Product[] = [];
  productDisplayedList: Product[] = [];
  displayCount: number = 20;

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
      this.productDisplayedList = data.slice(0, 20);
      this.productList = data;
    });
  }

  addCart({ productId, count }: { productId: string, count: number }) {
    const isProductEnough$ = this._store.select(isProductEnough(productId, count));
    isProductEnough$.pipe(
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

  lazyRender() {
    this.displayCount += 20;
    this.productDisplayedList = this.productList.slice(0, this.displayCount);
  }
}
