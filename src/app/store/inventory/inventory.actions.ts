import { createAction, props } from "@ngrx/store";
import { MerchandiseEntry } from 'src/app/models/MerchandiseEntry';

export const inventoryActions = {
    add: createAction('[Inventory Component] Add', props<MerchandiseEntry>()),
    remove: createAction('[Inventory Component] Remove')
}
