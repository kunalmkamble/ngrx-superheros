import { EffectsModule } from '@ngrx/effects'
import { InventoryEffects } from './inventory/invetory.effects';
export const rootEffect = EffectsModule.forRoot([InventoryEffects]);