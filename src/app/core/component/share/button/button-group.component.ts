import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: [],
  host: {
    '[class.flex]': 'true',
    '[class.gap-3]': 'true',
    '[class.justify-start]': 'this.side === "left"',
    '[class.justify-center]': 'this.side === "center"',
    '[class.justify-end]': 'this.side === "right"',
  }
})
export class ButtonGroupComponent implements OnInit {
  @Input() side: 'left' | 'right' | 'center' = 'left';

  constructor() { }

  ngOnInit(): void {
  }
}
