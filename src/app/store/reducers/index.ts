import * as routerStore from "@ngrx/router-store";
import { Params, RouterStateSnapshot } from "@angular/router";
import { ActionReducerMap } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store/src/selector";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RouterState {
  routerReducer: routerStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<RouterState> = {
  routerReducer: routerStore.routerReducer
};

export const getRouterState = createFeatureSelector<
  routerStore.RouterReducerState<RouterStateUrl>
>("routerReducer");

export class RouterStateUrlSerializer
  implements routerStore.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}
