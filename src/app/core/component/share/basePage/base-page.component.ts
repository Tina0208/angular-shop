import { Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent {
  @ContentChild('buttonAction')
  buttonTemplateRef?: TemplateRef<any>;

  constructor(
    public elementRef: ElementRef<HTMLElement>
  ) { }
}
