import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AlertService } from 'src/app/core/service/alert.service';

const COUNTINPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountInputComponent),
  multi: true
}

@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.scss'],
  providers: [COUNTINPUT_CONTROL_VALUE_ACCESSOR]
})
export class CountInputComponent implements OnInit, ControlValueAccessor {
  private _count: number = 1;
  @Input() restProduct: number = 0;
  @Output() minus = new EventEmitter<any>();
  @Output() plus = new EventEmitter<any>();
  @Output() countInput = new EventEmitter<any>();

  constructor(
    private injector: Injector,
    private _alertService: AlertService
  ) { }

  @Input() disabled: boolean = false;
  onChange!: (value: any) => {};
  onTouch!: () => {};
  ngControl!: NgControl;

  set content(value: number) {
    this._count = value;
  };
  get content() {
    return this._count;
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  private _inputCount() {
    this.countInput.emit(this._count);
  }

  writeValue(value: number) {
    this._count = value;
    if (value === 1) this._count = 1;
    this.contentChanged();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  contentChanged() {
    if (this.onChange) {
      this.onTouch();
      this.onChange(this._count);
    }
  }

  minusProduct() {
    if (this._count > 1) {
      this._count--;
      this.contentChanged();
      this.minus.emit();
    }
  }

  addProduct() {
    if (this._count < this.restProduct) {
      this._count++;
      this.contentChanged();
      this.plus.emit();
    }
  }

  blur() {
    if (this._count > this.restProduct || !this._count) {
      this._count = 1;
      this._alertService.alert(
        '輸入錯誤',
        '未輸入或是輸入的數量超過商品總數', 'alert'
      )
    };

    this._inputCount();
  }
}
