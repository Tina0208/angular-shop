import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart, Pay } from 'src/app/core/model/type/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productChecked: boolean = false;
  @Input() type: 'cart' | 'pay' = 'cart';
  @Input() serialNumber?: number;
  @Input() product: Cart | Pay = {} as Cart | Pay;
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  onProductDelete(id: string) {
    this.deleteProduct.emit(id);
  }
}
