import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/type/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  loadProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }
}
