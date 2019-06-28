import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Merchandise } from '../models/Merchandise';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import AppState from '../store/App.state';
import { Remove } from '../store/inventory/inventory.actions';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  entry: Merchandise;
  inventory$: Observable<Merchandise[]>;
  cart$: Observable<MerchandiseEntry[]>;
  heroAdded: boolean;

  constructor(private store: Store<AppState>, private fireStore: AngularFirestore) {
    this.resetEntry();
    this.inventory$ = store.select('inventory');
    this.cart$ = store.select('cart');
  }

  resetEntry() {
    this.entry = { displayImage: '', label: '', description: '', price: 0, quantity: 0 };
  }

  removeHero = (index: number, entry: MerchandiseEntry): void => {
    this.store.dispatch(new Remove(index));
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

  addHero(){
    this.store.dispatch(inventoryActions.add({...this.entry}));
    this.resetEntry();
  }

  add() {
    this.resetEntry();
  }

}
