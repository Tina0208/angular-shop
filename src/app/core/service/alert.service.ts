import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/share/dialog/dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private _dialog: MatDialog) { }

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
