import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../component/share/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/share/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  /**
   * 通知視窗
   * @param {string} title 視窗標題
   * @param {string} content 視窗內文
   * @param {'alert' | 'confirm'} type 視窗類型(通知 OR 確認)
   */
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

  /**
   * 信息條
   * @param {string} content 訊息內容
   * @param {number} durationInSeconds 訊息條顯示時間(秒)
   */
  snackBar(
    content: string, 
    durationInSeconds: number
  ): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: durationInSeconds * 1000,
      data: content
    });
  }
}
