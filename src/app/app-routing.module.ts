import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [{
  path: 'inventory',
  component: InventoryComponent
},
{
  path: '',
  component: ShopComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
