import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../component/block/footer/footer.component';
import { IconComponent } from '../component/share/icon/icon.component';
import { MaterialModule } from './material.module';
import { MarqueeComponent } from '../component/block/marquee/marquee.component';
import { MenuComponent } from '../component/block/menu/menu.component';
import { RouterModule } from '@angular/router';
import { BasePageComponent } from '../component/share/basePage/base-page.component';
import { CardComponent } from '../component/share/card/card.component';
import { CardContainerComponent } from '../component/share/card/card-container.component';
import { CountInputComponent } from '../component/share/countInput/count-input.component';
import { ButtonComponent } from '../component/share/button/button.component';
import { ButtonGroupComponent } from '../component/share/button/button-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '../component/share/checkbox/checkbox.component';
import { CartComponent } from '../component/share/cart/cart.component';
import { CartContainerComponent } from '../component/share/cart/cart-container.component';
import { DialogComponent } from '../component/share/dialog/dialog.component';
import { StepperComponent } from '../component/share/stepper/stepper.component';
import { OutlineComponent } from '../component/share/outline/outline.component';
import { ListComponent } from '../component/share/list/list.component';
import { InputComponent } from '../component/share/input/input.component';
import { RadioComponent } from '../component/share/radio/radio.component';
import { CouponComponent } from '../component/share/coupon/coupon.component';
import { DateTimePipe } from '../pipe/dateTime/date-time.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    IconComponent,
    MarqueeComponent,
    MenuComponent,
    BasePageComponent,
    CardComponent,
    CardContainerComponent,
    CountInputComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CheckboxComponent,
    CartComponent,
    CartContainerComponent,
    DialogComponent,
    StepperComponent,
    OutlineComponent,
    ListComponent,
    InputComponent,
    RadioComponent,
    CouponComponent,
    DateTimePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    MarqueeComponent,
    MenuComponent,
    BasePageComponent,
    CardComponent,
    CardContainerComponent,
    CountInputComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CheckboxComponent,
    CartComponent,
    CartContainerComponent,
    DialogComponent,
    StepperComponent,
    OutlineComponent,
    ListComponent,
    InputComponent,
    RadioComponent,
    CouponComponent,
    ReactiveFormsModule,
    DateTimePipe
  ],
})
export class SharedModule { }
