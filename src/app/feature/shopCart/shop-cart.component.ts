import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Page } from 'src/app/core/model/class/page.component';
import { Cart } from 'src/app/core/model/type/interface';
import { AlertService } from 'src/app/core/service/alert.service';
import { deleteProduct, inputCount, minusOneProudct, plusOneProduct } from 'src/app/core/store/actions/cart.actions';
import { loadPayData } from 'src/app/core/store/actions/pay.actions';
import { selectCartState } from 'src/app/core/store/selectors/cart.selectors';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent extends Page implements OnInit {
  cartList: Cart[] = [];
  get totalProductCount() {
    return this.cartList.reduce((total, current) => {
      return total + current.productCartCount;
    }, 0)
  };
  get totalPrice() {
    return this.cartList.reduce((total, current) => {
      return total + current.productCartCount * current.productPrice;
    }, 0)
  };
  get allProductChecked() {
    return this.cartsFormControls.controls.every(control => control.get('checked')?.value);
  };
  get productSeleced() {
    return this.cartsFormControls.controls.some(control => control.get('checked')?.value);
  }
  get cartsFormControls() {
    return this.form.controls['carts'] as FormArray;
  };
  form = this._formBuilder.group({
    allChecked: new FormControl(false),
    carts: this._formBuilder.array([])
  });

  constructor(
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _alertService: AlertService,
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadCartData();
    this._initForm();
    this.scrollToTop();
  }

  private _loadCartData() {
    this._store.select(selectCartState).subscribe((data) => {
      this.cartList = data;
    })
  }

  private _initForm() {
    this.cartList.forEach((item) => {
      const cartForm = this._formBuilder.group({
        checked: [false],
        count: [item.productCartCount],
      });

      this.cartsFormControls.push(cartForm);
    })
  }

  minusProduct(_: any, item: Cart) {
    this._store.dispatch(minusOneProudct(item));
  }

  plusProduct(_: any, item: Cart) {
    this._store.dispatch(plusOneProduct(item));
  }

  inputProductCount(count: number, item: Cart) {
    this._store.dispatch(inputCount({ ...item, productCartCount: count }));
  }

  deleteProduct(id: string, index: number) {
    this._alertService.alert('刪除商品', '是否確定從購物車刪除此商品?').pipe(
      filter((res) => res)
    ).subscribe(() => {
      this.cartsFormControls.removeAt(index);
      this._store.dispatch(deleteProduct({ id }));
    });
  }

  toggleAllChecked() {
    this.cartsFormControls.controls.forEach((control) => {
      control.get('checked')?.setValue(this.form.value.allChecked ? true : false)
    });
  }

  checkAllChecked() {
    this.form.get('allChecked')?.setValue(this.allProductChecked ? true : false);
  }

  buy() {
    const checkedList = this.cartList.filter((_, i) =>
      this.cartsFormControls.controls.at(i)?.get('checked')?.value
    );
    this._store.dispatch(loadPayData({ payItems: checkedList }));
    this._router.navigate(['/pay']);
  }
}
