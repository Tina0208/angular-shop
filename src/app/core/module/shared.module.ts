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
import { DialogComponent } from '../component/share/dialog/dialog.component';
import { ButtonComponent } from '../component/share/button/button.component';
import { ButtonGroupComponent } from '../component/share/button/button-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    DialogComponent,
    ButtonComponent,
    ButtonGroupComponent
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
    DialogComponent,
    ButtonComponent,
    ButtonGroupComponent
  ]
})
export class SharedModule { }
