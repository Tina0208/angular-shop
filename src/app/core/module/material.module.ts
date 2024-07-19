import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
