import { gamesApi } from './../api/api';
import { configureStore } from "@reduxjs/toolkit";
import { gamesFilterSlice } from './features/gamesFilter';

export const store = configureStore({
  reducer: {
    gamesFilterSlice: gamesFilterSlice.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
