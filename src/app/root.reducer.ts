import { cartReducer } from "./store/cart/cart.reducers";
import { StoreModule } from "@ngrx/store";
import { inventory } from './store/inventory/inventory.reducers';

export const rootReducer = StoreModule.forRoot({ cart: cartReducer, inventory });
