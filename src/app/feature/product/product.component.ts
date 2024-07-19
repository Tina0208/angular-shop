import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { Page } from 'src/app/core/model/class/page.component';
import { Pay, Product } from 'src/app/core/model/type/interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { addCart } from 'src/app/core/store/actions/cart.actions';
import { loadPayData } from 'src/app/core/store/actions/pay.actions';
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
    private _authService: AuthService,
    private _router: Router,
    public override _snackBar: MatSnackBar,
  ) {
    super(_snackBar);
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

  private _userLoginedAndProductEnough({ productId, count }: { productId: string, count: number }): Observable<boolean> {
    const userLogined$ = this._authService.userLogined$();
    const isProductEnough$ = this._store.select(isProductEnough(productId, count));

    return userLogined$.pipe(
      filter((logined) => logined),
      switchMap(() => isProductEnough$),
      filter((productEnough) => productEnough),
      take(1)
    );
  }

  addCart({ productId, count }: { productId: string, count: number }) {
    this._userLoginedAndProductEnough({ productId, count }).subscribe(() => {
      const addedProduct = this.productList.find((product) => product.productId === productId)!;
      this._store.dispatch(addCart({
        ...addedProduct,
        productCartCount: count
      }));

      this.openSnackBar('商品已加入購物車!', 2);
    });
  }

  buy({ buyProduct, count }: { buyProduct: Pay, count: number }) {
    this._userLoginedAndProductEnough({ productId: buyProduct.productId, count }).subscribe(() => {
      this._store.dispatch(loadPayData({ payItems: [buyProduct] }));
      this._router.navigate(['/pay']);
    });
  }

  lazyRender() {
    this.displayCount += 20;
    this.productDisplayedList = this.productList.slice(0, this.displayCount);
  }
}
