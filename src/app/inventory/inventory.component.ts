import { Component, OnInit } from '@angular/core';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../store/App.state';
import { inventoryActions } from '../store/inventory/inventory.actions';
import { cartActions } from '../store/cart/cart.actions';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  entry: MerchandiseEntry;
  inventory$: Observable<MerchandiseEntry[]>;
  cart$: Observable<MerchandiseEntry[]>;
  heroAdded: boolean;

  constructor(private store: Store<AppState>) {
    this.resetEntry();
    this.inventory$ = store.select('inventory');
    this.cart$ = store.select('cart');
  }

  resetEntry() {
    this.entry = { merchandise: { displayImage: '', label: '', description: '', price: 0 }, quantity: 0, available: false };
  }

  addNewHero = () => {
    const newSuperHero = {
      quantity: 100,
      available: true,
      merchandise: {
        label: 'Thor',
        description: 'Thunder storm',
        price: 29.99,
        displayImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkwvBRzcFGPYcPO-AUkJIUcoj-mGK1bPIjvRiWfX_KtcsobGCmA'
      }
    };
    this.store.dispatch(inventoryActions.add(newSuperHero));
    this.heroAdded = true;
  }

  removeHero = (index: number, entry: MerchandiseEntry): void => {
    this.store.dispatch(inventoryActions.remove({index}));
    this.cart$.subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (entry.merchandise.label === res[i].merchandise.label) {
          res[i].available = false;
          this.heroAdded = false;
          break;
        }
      }
    });
  }

  add() {
    this.resetEntry();
  }

}
