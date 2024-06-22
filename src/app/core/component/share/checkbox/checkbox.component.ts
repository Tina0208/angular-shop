import { Component, Injector, Input, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  private _checked: boolean = false;
  @Input() disabled: boolean = false;
  onChange!: (value: any) => {};
  onTouch!: () => {};
  ngControl!: NgControl;

  constructor(
    private injector: Injector,
  ) { }

  set content(value: boolean) {
    this._checked = value;
  };
  get content() {
    return this._checked;
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  writeValue(value: boolean) {
    this._checked = value;
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
      this.onChange(this._checked);
    }
  }
}
