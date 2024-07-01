import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[scrollNearEnd]'
})
export class ScrollNearEndDirective {
  private _window!: Window;
  @Input() scrollTarget: 'window' | 'element' = 'window';
  @Input() threshold = 120;
  @Output() nearEnd: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _el: ElementRef) { }

  ngOnInit(): void {
    this._window = window;
    this.scrollTarget === 'window' ? this._windowScroll() : this._elementScroll();
  }

  private _elementScroll() {
    fromEvent(this._el.nativeElement, 'scroll').subscribe(() => {
      const heightOfElment = this._el.nativeElement.scrollHeight;
      const currentScrolledYOfElement = this._el.nativeElement.scrollTop;

      const scrollToBottom = heightOfElment - currentScrolledYOfElement;
      this._triggerScrollNearEnd(scrollToBottom);
    });
  }

  private _windowScroll() {
    fromEvent(document, 'scroll').subscribe(() => {
      const heightOfPage = this._window.document.documentElement.scrollHeight;
      const heightOfPageNoConsole = this._window.innerHeight;
      const currentScrolledY = this._window.scrollY;

      const scrollToBottom = heightOfPage - heightOfPageNoConsole - currentScrolledY;
      this._triggerScrollNearEnd(scrollToBottom);
    });
  }

  private _triggerScrollNearEnd(scrollToBottom: number) {
    if (scrollToBottom < this.threshold) this.nearEnd.emit();
  }
}
