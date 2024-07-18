import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AlertService } from 'src/app/core/service/alert.service';
import { logout } from 'src/app/core/store/actions/auth.actions';
import { selectUserState } from 'src/app/core/store/selectors/auth.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  logined: boolean = false;
  @Input() pageType: 'login' | 'home' = 'home';

  constructor(
    private _store: Store,
    private _alertService: AlertService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._checkIsLogined();
  }

  private _checkIsLogined() {
    this._store.select(selectUserState).subscribe((userLogined) => {
      this.logined = !!userLogined;
    })
  }

  logout() {
    this._alertService.alert('登出', '是否確定登出?', 'confirm').pipe(
      filter((res) => res)
    ).subscribe(() => {
      this._store.dispatch(logout());
      this._router.navigate(['/login']);
    });
  }
}
