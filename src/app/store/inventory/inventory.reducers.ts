import { ClassActionTypes, ClassActions } from "./inventory.actions";
import { Merchandise } from 'src/app/models/Merchandise';

const initialState = [];

export function inventory(state: Merchandise[] = initialState, action: ClassActions): Merchandise[] {
  switch (action.type) {
    case ClassActionTypes.ADD: {
      state = state.concat(action.payload);
      return state;
    }

    case ClassActionTypes.REMOVE: {
      state = state.filter((entry, index) => index !== action.index);
      return state;
    }
    case ClassActionTypes.SETUP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

