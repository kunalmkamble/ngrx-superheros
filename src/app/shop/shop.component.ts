import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Merchandise } from '../models/Merchandise';
import { cartActions } from '../store/cart/cart.actions';
import { ClassActionTypes } from '../store/inventory/inventory.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  title = 'MCU';
  inventory$: Observable<Merchandise[]>;
  constructor(private store: Store<{ inventory: Merchandise[] }>) {
    this.inventory$ = store.select('inventory');
  }

  ngOnInit() {
    this.store.dispatch({ type: ClassActionTypes.GET });
  }

  addToCart(merchandise: Merchandise, quantity: number, available: boolean) {
    this.store.dispatch(cartActions.add({ merchandise, quantity, available }));
  }

}
