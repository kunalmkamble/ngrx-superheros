import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MerchandiseEntry } from '../models/MerchandiseEntry';
import AppState from '../store/App.state';
import { cartActions } from '../store/cart/cart.actions';
import { Merchandise } from '../models/Merchandise';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent implements OnInit {

  @Input() merchandise: Merchandise;
  quantity = 1;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addToCart() {
    this.store.dispatch(cartActions.add({ merchandise: this.merchandise, quantity: this.quantity, available: true }));
  }


}
