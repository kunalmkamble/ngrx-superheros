import { MerchandiseEntry } from '../models/MerchandiseEntry';
import { Merchandise } from '../models/Merchandise';

export default interface AppState {
    cart: MerchandiseEntry[];
    inventory: Merchandise[];
}
