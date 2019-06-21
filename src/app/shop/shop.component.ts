import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Merchandise } from '../models/Merchandise';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import { cartActions } from "../store/cart/cart.actions";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  title = 'MCU';
  inventory$: Observable<MerchandiseEntry[]>;
  constructor(private store: Store<{ inventory: MerchandiseEntry[] }>) {
    this.inventory$ = store.select('inventory');
  }

  addToCart(merchandise: Merchandise, quantity: number) {
    this.store.dispatch(cartActions.add({ merchandise, quantity }));
  }

}
