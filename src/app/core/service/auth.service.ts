import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { selectUserState } from '../store/selectors/auth.selectors';
import { Store } from '@ngrx/store';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _store: Store,
    private _alertService: AlertService,
    private _router: Router,
  ) { }

  userLogined$(): Observable<boolean> {
    return this._store.select(selectUserState).pipe(
      map((token) => !!token),
      switchMap((logined) =>
        logined ?
        of(true) :
        this._alertService.alert('提示訊息', '請先登入', 'alert').pipe(
          switchMap(() => {
            this._router.navigate(['./login']);
            return of(false);
          })))
    )
  }
}
