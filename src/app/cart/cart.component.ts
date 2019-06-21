import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import AppState from '../store/App.state';
import { cartActions } from '../store/cart/cart.actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<MerchandiseEntry[]>;
  total: number;
  constructor(private store: Store<AppState>) {
    this.cart$ = store.select('cart');

    this.cart$.subscribe(entries => {
      this.total = entries.reduce((total, entry) => {
        return Math.round((total + entry.quantity * entry.merchandise.price) * 100) / 100;
      }, 0);
    });
  }

  ngOnInit() {
  }

  removeFromCart(index) {
    this.store.dispatch(cartActions.remove({ index }));
  }
  update(index: number, merchandiseEntry: MerchandiseEntry) {
    this.store.dispatch(cartActions.update({ index, merchandiseEntry }));
  }

}
