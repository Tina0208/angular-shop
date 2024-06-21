import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Product } from 'src/app/core/model/type/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  countInput: number = 1;
  @Input() product: Product = {} as Product;
  @Output() addCart = new EventEmitter<{ productId: string, count: number }>();
  form = this._formBuilder.group({
    count: new FormControl('1')
  })

  constructor(private _formBuilder: FormBuilder) { }

  getcoupon(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  onAddCart(productId: string, count: number) {
    this.addCart.emit({ productId, count });
  }
}
