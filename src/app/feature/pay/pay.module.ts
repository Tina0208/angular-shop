import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';
import { SharedModule } from 'src/app/core/module/shared.module';
import { MaterialModule } from 'src/app/core/module/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PayModule { }
