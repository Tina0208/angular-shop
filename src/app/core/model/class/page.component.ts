import { Component, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeBasePageComponent } from '../../component/layout/homeBasePage/home-base-page.component';
import { SnackbarComponent } from '../../component/share/snackbar/snackbar.component';


@Component({
  template: '',
})
export class Page {
  @ViewChild(HomeBasePageComponent)
  basePage?: HomeBasePageComponent;
  get invalidFeild() {
    return this.basePage?.elementRef.nativeElement.querySelector('.ng-invalid') as HTMLElement;
  }

  constructor(public _snackBar: MatSnackBar) { }

  validateForm(forms: FormGroup[]) {
    const invalidForm = forms.find(form => form.invalid);
    if (invalidForm) {
      this.focusInvalidFeild();
      this.scrollToInvalidFeild();
      return false;
    };

    return true;
  }

  scrollToInvalidFeild() {
    if (this.invalidFeild) this.invalidFeild.scrollIntoView({
      behavior: 'smooth',
    });
  }

  focusInvalidFeild() {
    if (this.invalidFeild) this.invalidFeild.focus();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openSnackBar(content: string, durationInSeconds: number) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: durationInSeconds * 1000,
      data: content
    });
  }
}
