import { Component, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { BasePageComponent } from 'src/app/core/component/share/basePage/base-page.component';


@Component({
  template: '',
})
export class Page {
  @ViewChild(BasePageComponent)
  basePage?: BasePageComponent;
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
      behavior: "smooth",
    });
  }

  focusInvalidFeild() {
    if (this.invalidFeild) this.invalidFeild.focus();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
