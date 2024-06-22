import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: {
    '[class.flex]': 'true',
    '[class.items-center]': 'true'
  }
})
export class RadioComponent implements OnInit {
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
