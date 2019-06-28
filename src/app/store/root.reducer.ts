import { cartReducer } from "./cart/cart.reducers";
import { StoreModule } from "@ngrx/store";
import { inventory } from './inventory/inventory.reducers';

export const rootReducer = StoreModule.forRoot({ cart: cartReducer, inventory });
