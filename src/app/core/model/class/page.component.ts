import { Component, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { HomeBasePageComponent } from '../../component/layout/homeBasePage/home-base-page.component';
import { Store } from '@ngrx/store';
import { selectUserState } from '../../store/selectors/auth.selectors';


@Component({
  template: '',
})
export class Page {
  @ViewChild(HomeBasePageComponent)
  basePage?: HomeBasePageComponent;
  get invalidFeild() {
    return this.basePage?.elementRef.nativeElement.querySelector('.ng-invalid') as HTMLElement;
  }

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
}
