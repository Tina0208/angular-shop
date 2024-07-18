import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iif, of } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { Page } from 'src/app/core/model/class/page.component';
import { Product } from 'src/app/core/model/type/interface';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';
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
    private _store: Store,
    private _alertService: AlertService,
    private _router: Router,
    private _authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadProductData();
    this.scrollToTop();
  }

  private _loadProductData() {
    this._store.dispatch(loadProducts());
    this._store.select(selectProductState).subscribe((data) => {
      this.productDisplayedList = data.slice(0, 20);
      this.productList = data;
    });
  }

  addCart({ productId, count }: { productId: string, count: number }) {
    const userLogined$ = this._authService.userLogined$();
    const isProductEnough$ = this._store.select(isProductEnough(productId, count));

    userLogined$.pipe(
      filter((logined) => logined),
      switchMap(() => isProductEnough$),
      filter((productEnough) => productEnough),
      take(1),
    ).subscribe(() => {
      const addedProduct = this.productList.find((product) => product.productId === productId)!;
      this._store.dispatch(addCart({
        ...addedProduct,
        productCartCount: count
      }));

      this._alertService.alert('加入購物車', '商品已加入購物車!', 'alert');
    });
  }

  lazyRender() {
    this.displayCount += 20;
    this.productDisplayedList = this.productList.slice(0, this.displayCount);
  }
}
