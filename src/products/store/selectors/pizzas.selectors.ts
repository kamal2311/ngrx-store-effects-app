import { PizzaState } from "../reducers/pizzas.reducer";
import { getProductsState, ProductsState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { getRouterState } from "../../../app/store";
import { Pizza } from "../../models/pizza.model";

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  (state: PizzaState) => state.entities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, routerState): Pizza => {
    return entities[routerState.state.params.id];
  }
);

export const getPizzasArray = createSelector(getPizzasEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id)])
);

export const getPizzaLoading = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loading
);

export const getPizzaLoaded = createSelector(
  getPizzaState,
  (state: PizzaState) => state.loaded
);
