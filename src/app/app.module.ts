
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { SharedModule } from './core/module/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productFeatureKey, productReducer } from './core/store/reducers/product.reducer';
import { cartFeatureKey, cartReducer } from './core/store/reducers/cart.reducer';
import { CommonModule } from '@angular/common';
// import { payFeatureKey, payReducer } from './core/store/reducers/pay.reducer';
import { ProductEffects } from './core/store/effects/product.effects';
import { payFeatureKey, payReducer } from './core/store/reducers/pay.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ [productFeatureKey]: productReducer, [cartFeatureKey]: cartReducer, [payFeatureKey]: payReducer }, {}),
    EffectsModule.forRoot([ProductEffects])
  ],
  exports: [
  ],
  providers: [
    appConfig.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
