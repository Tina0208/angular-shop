import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnChanges {
  @Input() stepList: { label: string }[] = [
    { label: '確認訂單明細' },
    { label: '填寫訂購資訊' },
    { label: '完成' },
  ];
  @Input() currentStep: number = 0;

  constructor(public elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['currentStep']) this._handleStepIconColor();
  }

  private _handleStepIconColor() {
    document.querySelectorAll('.mat-step-icon').forEach((icon, i) => {
      i <= this.currentStep?
      icon.classList.add('mat-step-icon-state-done') :
      icon.classList.remove('mat-step-icon-state-done');
    });
  }
}
