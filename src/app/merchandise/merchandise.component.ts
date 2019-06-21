import { Component, OnInit, Input } from '@angular/core';
import { Merchandise } from '../models/Merchandise';
import { Store } from '@ngrx/store';
import AppState from '../store/App.state';
import { cartActions } from '../store/cart/cart.actions';

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
    this.store.dispatch(cartActions.add({ merchandise: this.merchandise, quantity: this.quantity }));
  }


}
