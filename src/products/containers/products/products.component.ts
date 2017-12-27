import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services/pizzas.service";
import { Observable } from "rxjs/Observable";
import { ProductsState, getAllPizzas, LoadPizzas } from "../../store";
import { Store } from "@ngrx/store";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  // pizzas: Pizza[];

  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    // this.pizzaService.getPizzas().subscribe(pizzas => {
    //   this.pizzas = pizzas;
    // });

    this.pizzas$ = this.store.select(getAllPizzas);
    this.store.dispatch(new LoadPizzas());
  }
}
