import { Component, OnInit } from '@angular/core';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../store/App.state';
import { inventoryActions } from '../store/inventory/inventory.actions';

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

  add() {
    this.resetEntry();
  }

}
