import { AfterViewInit, Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, AfterViewInit {
  @Input() stepList: { label: string }[] = [
    { label: '確認訂單明細' },
    { label: '填寫訂購資訊' },
    { label: '完成' }
  ];
  @Input() currentStep: number = 0;

  constructor(
    public elementRef: ElementRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this._handleStepIconColor();
  }

  private _handleStepIconColor() {
    document.querySelectorAll('.mat-step-icon').forEach((icon, i) => {
      if (i <= this.currentStep) {
        icon.classList.add('mat-step-icon-state-done');
      }
    })
  }
}
