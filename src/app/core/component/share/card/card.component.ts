import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Pay, Product } from 'src/app/core/model/type/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  countInput: number = 1;
  imageSrc: string = 'assets/image/loading.png';
  @Input() product: Product = {} as Product;
  @Output() addCart = new EventEmitter<{ productId: string; count: number }>();
  @Output() buy = new EventEmitter<{ buyProduct: Pay; count: number }>();
  form = this._formBuilder.group({
    count: new FormControl('1'),
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._loadImageFromCDN();
  }

  private _loadImageFromCDN() {
    const cdnImageUrl = this.product.productImage;
    const productImage = new Image();
    productImage.src = cdnImageUrl;

    fromEvent(productImage, 'load').subscribe(() => {
      this.imageSrc = productImage.src;
    });
  }

  onAddCart(productId: string, count: number) {
    this.addCart.emit({ productId, count });
  }

  onBuy(product: Product, count: number) {
    const buyProduct = { ...product, productCartCount: count };
    this.buy.emit({ buyProduct, count });
  }
}
