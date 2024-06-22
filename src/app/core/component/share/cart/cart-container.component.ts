import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartContainerComponent implements OnInit {
  @Input() type: 'cart' | 'pay' = 'cart';

  constructor() { }

  ngOnInit(): void {
  }
}
