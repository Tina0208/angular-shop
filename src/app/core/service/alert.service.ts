import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../component/share/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private _dialog: MatDialog,
  ) { }

  alert(
    title: string,
    content: string,
    type: 'alert' | 'confirm' = 'confirm'
  ): Observable<boolean> {
    return this._dialog.open(DialogComponent, {
      width: '350px',
      data: { title, content, type }
    }).afterClosed();
  }
}
