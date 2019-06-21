import { createAction, props } from "@ngrx/store";
import { MerchandiseEntry } from 'src/app/models/MerchandiseEntry';

export const cartActions = {
    add: createAction('[Cart] Add', props<MerchandiseEntry>()),
    remove: createAction('[Cart] Remove', props<{ index: number }>()),
    update: createAction('[Cart] Update', props<{ index: number, merchandiseEntry: MerchandiseEntry }>())
}
