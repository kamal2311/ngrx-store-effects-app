import { PizzasService } from "../../../products/services";
import { of } from "rxjs/observable/of";
import {
  LOAD_PIZZAS,
  LoadPizzas,
  LoadPizzasSuccess,
  LoadPizzasFail
} from "../actions/pizzas.action";
import { switchMap } from "rxjs/operators/switchMap";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators/catchError";
import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

@Injectable()
export class PizzasEffects {
  constructor(private pizzaService: PizzasService, private actions$: Actions) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new LoadPizzasSuccess(pizzas)),
          catchError(error => of(new LoadPizzasFail(error)))
        );
    })
  );
}
