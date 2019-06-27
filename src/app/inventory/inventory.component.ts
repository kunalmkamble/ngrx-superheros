import { Component, OnInit } from '@angular/core';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../store/App.state';
import { inventoryActions } from '../store/inventory/inventory.actions';
import { cartActions } from '../store/cart/cart.actions';
import { Merchandise } from '../models/Merchandise';
import { FirebaseDatabase } from '@angular/fire';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

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
    this.store.dispatch(inventoryActions.remove({ index }));
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
