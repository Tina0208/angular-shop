import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { ProductService } from 'src/app/core/api/product.service';
import { Page } from 'src/app/core/model/class/page.component';
import { Coupon, Pay } from 'src/app/core/model/type/interface';
import { AlertService } from 'src/app/core/service/alert.service';
import { buy } from 'src/app/core/store/actions/cart.actions';
import { loadCoupons } from 'src/app/core/store/actions/coupon.actions';
import { selectDeliveryFreeCoupon, selectDiscountCoupon } from 'src/app/core/store/selectors/coupon.selectors';
import { selectPayState } from 'src/app/core/store/selectors/pay.selectors';
import { required, validateEmail, validatePhoneNumber } from 'src/app/core/util/validator.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent extends Page implements OnInit {
  private _deliveryFee: number = 60;
  currentStep: number = 0;
  coupounSelected: Coupon = {} as Coupon;
  payList: Pay[] = [];
  today: Date = new Date();
  get totalProductCount() {
    return this.payList.reduce((total, current) => {
      return total + current.productCartCount;
    }, 0)
  };
  get initPrice() {
    return this.payList.reduce((total, current) => {
      return total + current.productCartCount * current.productPrice;
    }, 0);
  };
  get totalPrice() {
    switch (this.coupounSelected.couponType) {
      case 'discount':
        return this.initPrice * this.coupounSelected.discount!
      case 'price-off':
        return this.initPrice - this.coupounSelected.priceOff!
      default:
        return this.initPrice;
    }
  };
  get totalDeliveryFee() {
    return this.coupounSelected.couponType === 'delivery-free' ? 0 : this._deliveryFee;
  };
  deliveryFreeCoupon: Coupon[] = [];
  discountCoupon: Coupon[] = [];
  buyerForm: FormGroup = new FormGroup({
    name: new FormControl('', [required()]),
    phone: new FormControl('', [required(), validatePhoneNumber()]),
    mail: new FormControl('', [required(), validateEmail()]),
    address: new FormControl('', [required()]),
  });
  receiverForm: FormGroup = new FormGroup({
    name: new FormControl('', [required()]),
    phone: new FormControl('', [required(), validatePhoneNumber()]),
    mail: new FormControl('', [required(), validateEmail()]),
    address: new FormControl('', [required()]),
    sameAsBuyer: new FormControl('')
  });
  couponForm: FormGroup = new FormGroup({
    coupon: new FormControl('')
  });

  constructor(
    private _store: Store,
    private _alertService: AlertService,
    private _productService: ProductService,
    public override _snackBar: MatSnackBar
  ) {
    super(_snackBar);
  }

  ngOnInit(): void {
    this.scrollToTop();
    this._loadPayListData();
    this._loadCouponListData();
  }

  private _loadPayListData() {
    this._store.select(selectPayState).subscribe((data) => {
      this.payList = data;
    });
  }

  private _loadCouponListData() {
    this._store.dispatch(loadCoupons());
    this._store.select(selectDeliveryFreeCoupon).subscribe((data) => this.deliveryFreeCoupon = data);
    this._store.select(selectDiscountCoupon).subscribe((data) => this.discountCoupon = data);
  }

  private _scrollToStepper() {
    window.scrollTo({
      top: 74,
      behavior: 'smooth'
    });
  }

  selectCoupon(coupon: Coupon) {
    this.coupounSelected = coupon;
  }

  nextPage() {
    this.currentStep++;
    this._scrollToStepper();
  }

  prevPage() {
    this.currentStep--;
    this._scrollToStepper();
  }

  confirm() {
    const isFormValid = this.validateForm([this.buyerForm, this.receiverForm]);
    if (!isFormValid) return;

    this._alertService.alert('送出訂單', '是否確定資料正確，並完成訂單?').pipe(
      filter((res) => res)
    ).subscribe(() => {
      const productsId = this.payList.map((item) => item.productId);
      this._store.dispatch(buy({ id: productsId }));
      this._productService.updateProducts$(this.payList).subscribe();
      this.nextPage();
    });
  }

  updateReceiverFormValue() {
    if (this.receiverForm.value.sameAsBuyer) {
      this.receiverForm.patchValue(this.buyerForm.value);
    } else {
      this.receiverForm.reset();
    }
  }

  couponUsable(coupon: Coupon) {
    switch (coupon.couponType) {
      case 'delivery-free':
        return this.initPrice >= coupon.limit;
      case 'discount':
        return this.totalProductCount >= coupon.limit;
      case 'price-off':
        return this.initPrice >= coupon.limit;
      default:
        return false;
    }
  }
}
