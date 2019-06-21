import { createReducer, on, createAction } from '@ngrx/store';
import { MerchandiseEntry } from 'src/app/models/MerchandiseEntry';
import { cartActions } from './cart.actions';
const initialState: MerchandiseEntry[] = [];

export const cartReducer = createReducer(initialState,
    on(cartActions.add, (state, merchandiseEntry: MerchandiseEntry) => {
        state = state.concat(merchandiseEntry);
        return state;
    }),
    on(cartActions.remove, (state, { index }) => {
        state = state.filter((entry, i) => i !== index);
        return state;
    }),
    on(cartActions.update, ((state, { index, merchandiseEntry }) => {

        state = state.map((entry, i) => {
            if (i === index) {
                return { ...entry, ...merchandiseEntry };
            }
            return entry;
        });
        return state;
    })));
