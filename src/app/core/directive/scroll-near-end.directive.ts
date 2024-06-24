import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appScrollNearEnd]'
})
export class ScrollNearEndDirective {
  private _window!: Window;
  @Input() threshold = 180;
  @Output() nearEnd: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this._window = window;
    this._windowScroll();
  }

  private _windowScroll() {
    fromEvent(document, 'scroll').subscribe(() => {
      const heightOfPage = this._window.document.documentElement.scrollHeight;
      const heightOfPageNoConsole = this._window.innerHeight;
      const currentScrolledY = this._window.scrollY;

      const scrollToBottom = heightOfPage - heightOfPageNoConsole - currentScrolledY;
      if (scrollToBottom < this.threshold) this.nearEnd.emit();
    });
  }
}
