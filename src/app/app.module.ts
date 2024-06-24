
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { SharedModule } from './core/module/shared.module';
import { CouponEffects } from './core/store/effects/coupon.effects';
import { ProductEffects } from './core/store/effects/product.effects';
import { cartFeatureKey, cartReducer } from './core/store/reducers/cart.reducer';
import { couponFeatureKey, couponReducer } from './core/store/reducers/coupon.reducer';
import { payFeatureKey, payReducer } from './core/store/reducers/pay.reducer';
import { productFeatureKey, productReducer } from './core/store/reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      [productFeatureKey]: productReducer,
      [cartFeatureKey]: cartReducer,
      [payFeatureKey]: payReducer,
      [couponFeatureKey]: couponReducer
    }, {}),
    EffectsModule.forRoot([ProductEffects, CouponEffects])
  ],
  exports: [
  ],
  providers: [
    appConfig.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
