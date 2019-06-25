import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Merchandise } from './models/Merchandise';
import { MerchandiseEntry } from './models/MerchandiseEntry';
import { cartActions } from './store/cart/cart.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MCU';
  inventory$: Observable<MerchandiseEntry[]>;

  constructor(private store: Store<{ inventory: MerchandiseEntry[] }>) {
    this.inventory$ = store.select('inventory');
  }

  addToCart(merchandise: Merchandise, quantity: number, available: boolean) {
    this.store.dispatch(cartActions.add({ merchandise, quantity, available }));
  }

}
