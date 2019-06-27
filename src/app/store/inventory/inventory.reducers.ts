import { createReducer, on } from '@ngrx/store';
import { Merchandise } from 'src/app/models/Merchandise';
import { inventoryActions } from './inventory.actions';

const initialState = [
  {
    quantity: 100,
    available: true,
    label: 'Ironman',
    description: 'A billionaire industrialist and genius inventor ',
    price: 199.90,
    // tslint:disable-next-line: max-line-length
    displayImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzCPz-Wkh9NiYXEeMJ4ouj8g1x_IHHdrSUVm_jp2u2Jewtmev6Qo5vUNr3GQY6adecIu_kBjpw_zY&usqp=CAc'
  },
  {
    quantity: 100,
    available: true,
    label: 'Captain America',
    description: 'The first avenger',
    price: 199.90,
    displayImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72nQ60F1BHKPZSPkolOyiWvCjof4PoErG8VTDze9UFS1ERbPrhg'
  },
  {
    quantity: 100,
    available: true,
    label: 'Hulk',
    description: 'Hulk smash!',
    price: 149.99,
    displayImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMblIxOfbcu8oOSv6AXeGxhH9dgYLl8DwSeJhOrZEfxfOHzq-3LA'
  }
];

export const inventory = createReducer(initialState,
  on(inventoryActions.add, (state, ...entry: Merchandise[]) => {
    state = state.concat(entry);
    return state;
  }),
  on(inventoryActions.remove, (state, { index }) => {
    state = state.filter((entry, i) => i !== index);
    return state;
  }));
