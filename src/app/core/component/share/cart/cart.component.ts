import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart, Pay, Product } from 'src/app/core/model/type/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productChecked: boolean = false;
  @Input() type: 'cart' | 'pay' = 'cart';
  @Input() serialNumber?: number;
  @Input() product: Cart | Pay = {} as Cart | Pay;
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onProductDelete(id: string) {
    this.deleteProduct.emit(id);
  }
}
