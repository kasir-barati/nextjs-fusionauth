import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth.api';
import {
  NotificationState,
  notificationReducer,
} from '../components/notification/notification.slice';

const rootReducer = combineReducers({
  notifications: notificationReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export interface PreloadedState {
  notifications?: NotificationState[];
}
export function createStore(preloadedState?: PreloadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(authApi.middleware);
    },
    preloadedState,
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
  });
}
