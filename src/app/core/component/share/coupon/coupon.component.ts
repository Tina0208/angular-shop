import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/core/model/type/interface';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  @Input() coupon: Coupon = {} as Coupon;

  constructor() { }
}
