import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/common/models/User.model';
import { userReducer, UserState } from './user.reducer';

export interface AppState {
  user: UserState;
  // ui: UiState;
  // data: DataState;
  router: RouterReducerState;
}


export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
