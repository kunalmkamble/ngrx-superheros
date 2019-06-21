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
  constructor(private store: Store<AppState>) {
    this.resetEntry();
    this.inventory$ = store.select('inventory');
  }

  resetEntry() {
    this.entry = { merchandise: { displayImage: '', label: '', description: '', price: 0 }, quantity: 0 };
  }

  addNewHero = () => {
    const newSuperHero = {
      quantity: 100,
      merchandise: {
        label: "Thor",
        description: "Thunder storm",
        price: 29.99,
        displayImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkwvBRzcFGPYcPO-AUkJIUcoj-mGK1bPIjvRiWfX_KtcsobGCmA'
      }
    };
    this.store.dispatch(inventoryActions.add(newSuperHero));
  }

  removeHero = (index: number): void => {
    this.store.dispatch(inventoryActions.remove({index}));
  }

  add() {
    this.resetEntry();
  }

}
