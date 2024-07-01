import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../feature/login/login.component';
import { FooterComponent } from '../component/block/footer/footer.component';
import { MarqueeComponent } from '../component/block/marquee/marquee.component';
import { MenuComponent } from '../component/block/menu/menu.component';
import { HomeBasePageComponent } from '../component/layout/homeBasePage/home-base-page.component';
import { LoginBasePageComponent } from '../component/layout/loginBasePage/login-base-page.component';
import { ButtonGroupComponent } from '../component/share/button/button-group.component';
import { ButtonComponent } from '../component/share/button/button.component';
import { CardContainerComponent } from '../component/share/card/card-container.component';
import { CardComponent } from '../component/share/card/card.component';
import { CartContainerComponent } from '../component/share/cart/cart-container.component';
import { CartComponent } from '../component/share/cart/cart.component';
import { CheckboxComponent } from '../component/share/checkbox/checkbox.component';
import { CountInputComponent } from '../component/share/countInput/count-input.component';
import { CouponComponent } from '../component/share/coupon/coupon.component';
import { DialogComponent } from '../component/share/dialog/dialog.component';
import { IconComponent } from '../component/share/icon/icon.component';
import { InputComponent } from '../component/share/input/input.component';
import { ListComponent } from '../component/share/list/list.component';
import { OutlineComponent } from '../component/share/outline/outline.component';
import { RadioComponent } from '../component/share/radio/radio.component';
import { StepperComponent } from '../component/share/stepper/stepper.component';
import { ScrollNearEndDirective } from '../directive/scroll-near-end.directive';
import { DateTimePipe } from '../pipe/date-time.pipe';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    FooterComponent,
    IconComponent,
    MarqueeComponent,
    MenuComponent,
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
    DateTimePipe,
    ScrollNearEndDirective,
    HomeBasePageComponent,
    LoginBasePageComponent,
    LoginComponent
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
    DateTimePipe,
    ScrollNearEndDirective,
    HomeBasePageComponent,
    LoginBasePageComponent
  ],
})
export class SharedModule { }
