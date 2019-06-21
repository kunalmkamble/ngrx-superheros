import { MerchandiseEntry } from '../models/MerchandiseEntry';

export default interface AppState {
    cart: MerchandiseEntry[];
    inventory: MerchandiseEntry[];
}
