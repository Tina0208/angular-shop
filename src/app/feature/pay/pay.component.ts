import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { StepperComponent } from 'src/app/core/component/share/stepper/stepper.component';
import { Page } from 'src/app/core/model/class/page.component';
import { Coupon, Pay } from 'src/app/core/model/type/interface';
import { AlertService } from 'src/app/core/service/alert.service';
import { buy } from 'src/app/core/store/actions/cart.actions';
import { selectPayState } from 'src/app/core/store/selectors/pay.selectors';
import { required, validateEmail, validatePhoneNumber } from 'src/app/core/util/validator.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent extends Page implements OnInit {
  currentStep: number = 0;
  deliveryFee: number = 60;
  coupounSelected: Coupon = {} as Coupon;
  payList: Pay[] = [];
  today: Date = new Date();
  get totalProductCount() {
    return this.payList.reduce((total, current) => {
      return total + current.productCartCount;
    }, 0)
  };
  get totalPrice() {
    const initPrice = this.payList.reduce((total, current) => {
      return total + current.productCartCount * current.productPrice;
    }, 0);

    switch (this.coupounSelected.couponType) {
      case 'discount':
        return initPrice * this.coupounSelected.discount!

      case 'price-off':
        return initPrice - this.coupounSelected.priceOff!

      default:
        return initPrice;
    }
  };
  get totalDeliveryFee() {
    return this.coupounSelected.couponType === 'delivery-free' ? 0 : this.deliveryFee;
  };
  deliveryFreeCoupon: Coupon[] = [
    {
      couponId: '1',
      couponName: '$1,000免運券',
      couponDescription: '低消$1,000',
      couponType: "delivery-free",
      limit: 1000,
      deliveryFree: true
    }
  ];
  discountCoupon: Coupon[] = [
    {
      couponId: '2',
      couponName: '任選3件85折',
      couponDescription: '低消3件商品',
      couponType: "discount",
      limit: 1000,
      discount: 0.85
    },
    {
      couponId: '3',
      couponName: '滿$1000折$150',
      couponDescription: '低消$1,000',
      couponType: "price-off",
      limit: 1000,
      priceOff: 150
    },
    {
      couponId: '4',
      couponName: '滿$3000折$600',
      couponDescription: '低消$3,000',
      couponType: "price-off",
      limit: 1000,
      priceOff: 600
    }
  ];
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
    isSame: new FormControl('')
  });
  @ViewChild(StepperComponent)
  stepper?: StepperComponent;

  constructor(
    private _store: Store,
    private _alertService: AlertService
  ) {
    super();
  }

  ngOnInit(): void {
    this._loadPayListData();
    this.scrollToTop();
  }

  private _loadPayListData() {
    this._store.select(selectPayState).subscribe((data) => {
      console.log('data',data);
      this.payList = data;
    });
  }

  private _scrollToStepper() {
    this.stepper?.elementRef.nativeElement.scrollIntoView({
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
      this.nextPage();
    });
  }

  updateReceiverFormValue() {
    if (this.receiverForm.value.isSame) {
      this.receiverForm.patchValue(this.buyerForm.value);
    } else {
      this.receiverForm.reset();
    }
  }
}
