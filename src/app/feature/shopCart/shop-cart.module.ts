import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShopCartComponent } from './shop-cart.component';
import { SharedModule } from 'src/app/core/module/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/module/material.module';


@NgModule({
  declarations: [
    ShopCartComponent
  ],
  imports: [
    CommonModule,
    ShopCartRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ShopCartModule { }
