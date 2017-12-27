import { ActionReducerMap } from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducer";
import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store/src/selector";
import { PizzaState } from "./pizzas.reducer";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.pizzasReducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzaState,
  (state: PizzaState) => state.data
);

export const getPizzaLoaded = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loaded
);

export const getPizzaLoading = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loading
);
