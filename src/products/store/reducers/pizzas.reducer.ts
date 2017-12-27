import { Pizza } from "../../models/pizza.model";
import {
  PizzasAction,
  LOAD_PIZZAS,
  LOAD_PIZZAS_SUCCESS,
  LOAD_PIZZAS_FAIL
} from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
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
  ],
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
      return { ...state, loading: false, loaded: true, data };
    }
    case LOAD_PIZZAS_FAIL:
      return { ...state, loading: false, loaded: false };

    default:
      break;
  }
  return state;
}
