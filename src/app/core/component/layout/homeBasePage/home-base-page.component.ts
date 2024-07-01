import { Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-home-base-page',
  templateUrl: './home-base-page.component.html',
  styleUrls: ['./home-base-page.component.scss']
})
export class HomeBasePageComponent {
  @ContentChild('buttonAction')
  buttonTemplateRef?: TemplateRef<any>;

  constructor(
    public elementRef: ElementRef<HTMLElement>
  ) { }
}
