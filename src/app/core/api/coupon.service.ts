import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../model/type/interface';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  couponApiUrl = 'http://localhost:3000/coupons';

  constructor(private http: HttpClient) { }

  loadCoupons$(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.couponApiUrl);
  }
}
