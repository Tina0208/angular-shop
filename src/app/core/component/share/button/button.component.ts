import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.rounded-md]': 'true',
    '[class.flex]': 'true',
    '[class.text-white]': 'this.appearance === "solid"',
    '[class.text-color-green]': 'this.appearance === "outline"',
    '[class.bg-color-green]': 'this.appearance === "solid"',
    '[class.border-green]': 'this.appearance === "outline"',
    '[class.bg-color-transparent]': 'this.appearance === "outline"',
    '[class.hover:scale-105]': 'true',
    '[class.active:scale-90]': 'true'
  }
})
export class ButtonComponent implements OnInit {
  @Input() value: string = '按鈕';
  @Input() class: string = '';
  @Input() disabled: boolean = false;
  @Input() appearance: 'solid' | 'outline' = 'solid';

  constructor() { }

  ngOnInit(): void {
  }
}
