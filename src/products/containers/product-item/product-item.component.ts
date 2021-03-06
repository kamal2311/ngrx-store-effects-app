import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services/pizzas.service";

import { Topping } from "../../models/topping.model";
import { ToppingsService } from "../../services/toppings.service";

import * as productsStore from "../../store";
import { Store } from "@ngrx/store";
import { getSelectedPizza } from "../../store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "product-item",
  styleUrls: ["product-item.component.scss"],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise">
        </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise: Pizza;
  toppings: Topping[];

  constructor(private store: Store<productsStore.ProductsState>) {}

  ngOnInit() {
    this.pizza$ = this.store.select(getSelectedPizza);
  }

  onSelect(event: number[]) {}

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
    }
  }
}
