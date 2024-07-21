import { Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { RadioButton } from './radio.type';

const RADIO_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi: true
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [RADIO_CONTROL_VALUE_ACCESSOR],
  host: {
    '[class.flex]': 'true',
    '[class.items-center]': 'true'
  }
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = '';
  private _content: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() radioButton: RadioButton = {} as RadioButton;
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
    private _injector: Injector,
  ) { }

  ngOnInit(): void {
    this.ngControl = this._injector.get(NgControl);
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
