import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Page } from 'src/app/core/model/class/page.component';
import { login } from 'src/app/core/store/actions/auth.actions';
import { selectUserState } from 'src/app/core/store/selectors/auth.selectors';
import { required } from 'src/app/core/util/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Page implements OnInit {
  form: FormGroup = new FormGroup({
    user: new FormControl('user', [required()]),
    password: new FormControl('12345678', [required()]),
  });

  constructor(
    private _store: Store,
    private _router: Router,
    public override _snackBar: MatSnackBar
  ) {
    super(_snackBar);
  }

  ngOnInit(): void {
    this.scrollToTop();
  }

  login() {
    const isFormValid = this.validateForm([this.form]);
    if (!isFormValid) return;

    this._store.dispatch(login());
    this._store.select(selectUserState).subscribe((user) => {
      if(user) this._router.navigate(['/product']);
    });
  }
}
