import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'product', loadChildren: () => import('./feature/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./feature/shopCart/shop-cart.module').then(m => m.ShopCartModule) },
  { path: 'pay', loadChildren: () => import('./feature/pay/pay.module').then(m => m.PayModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
