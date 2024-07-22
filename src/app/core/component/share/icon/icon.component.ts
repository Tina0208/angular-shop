import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    '[style.width]': 'this.size',
    '[style.height]': 'this.size',
    '[class.cursor-pointer]': 'true',
    '[class.inline-block]': 'true'
  }
})
export class IconComponent {
  @Input() iconName: string = '';
  @Input() size: string = '24px';

  constructor() { }
}
