import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit {
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
