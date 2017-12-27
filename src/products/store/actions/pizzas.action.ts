import { Action } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";

export const LOAD_PIZZAS = "Pizzas.load";
export const LOAD_PIZZAS_SUCCESS = "Pizzas.load.success";
export const LOAD_PIZZAS_FAIL = "Pizzas.load.fail";

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export type PizzasAction = LoadPizzas | LoadPizzasSuccess | LoadPizzasFail;
