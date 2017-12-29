import { Pizza } from "../../models/pizza.model";
import {
  PizzasAction,
  LOAD_PIZZAS,
  LOAD_PIZZAS_SUCCESS,
  LOAD_PIZZAS_FAIL
} from "../actions/pizzas.action";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  entities: {
    2: {
      name: "Seaside Surfin'",
      toppings: [
        {
          id: 6,
          name: "mushroom"
        },
        {
          id: 7,
          name: "olive"
        },
        {
          id: 2,
          name: "bacon"
        },
        {
          id: 3,
          name: "basil"
        },
        {
          id: 1,
          name: "anchovy"
        },
        {
          id: 8,
          name: "onion"
        },
        {
          id: 11,
          name: "sweetcorn"
        },
        {
          id: 9,
          name: "pepper"
        },
        {
          id: 5,
          name: "mozzarella"
        }
      ],
      id: 2
    }
  },
  loading: false,
  loaded: false
};

export function pizzasReducer(
  state = initialState,
  action: PizzasAction
): PizzaState {
  switch (action.type) {
    case LOAD_PIZZAS:
      return { ...state, loading: true };
    case LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;

      const entities = data.reduce(
        (pizzas: { [id: number]: Pizza }, pizza: Pizza) => {
          return { ...pizzas, [pizza.id]: pizza };
        },
        { ...state.entities }
      );

      return { ...state, loading: false, loaded: true, entities };
    }
    case LOAD_PIZZAS_FAIL:
      return { ...state, loading: false, loaded: false };

    default:
      break;
  }
  return state;
}
