import { Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

const INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  private _content: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  onChange!: (value: any) => {};
  onTouch!: () => {};
  ngControl!: NgControl;

  set content(value: string) {
    this._content = value;
  };
  get content() {
    return this._content;
  }

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  writeValue(value: string) {
    this.content = value;
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
      this.onChange(this._content);
    }
  }
}
