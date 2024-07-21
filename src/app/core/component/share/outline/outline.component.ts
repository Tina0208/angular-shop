import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent {
  @Input() label: string = '';

  constructor() { }
}
