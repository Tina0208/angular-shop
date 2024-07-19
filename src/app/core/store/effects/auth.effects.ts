import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as AuthActions from '../actions/auth.actions';


@Injectable()
export class AuthEffects {
  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(() =>
        //TODO
        of('login').pipe(
          map(() => AuthActions.loginSuccess({ token: uuidv4() })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions) { }
}
