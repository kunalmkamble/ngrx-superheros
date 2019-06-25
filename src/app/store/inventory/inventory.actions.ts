import { createAction, props } from "@ngrx/store";
import { Merchandise } from 'src/app/models/Merchandise';

export const inventoryActions = {
    add: createAction('[Inventory Component] Add', props<Merchandise>()),
    remove: createAction('[Inventory Component] Remove', props<{ index: number }>()),
}
