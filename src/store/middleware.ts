import { ListenerMiddleware } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../config/utils";

const isActionGetGameById = (action: any) => {
  return action.type === 'gamesApi/executeQuery/fulfilled'
    && action.meta.arg.endpointName === 'getGameDetailsById';
}

export const localStorageMiddleware: ListenerMiddleware = api => next => action => {
  const result = next(action);

  if (isActionGetGameById(action)) {
    const savedInfo = getFromLocalStorage(`Game${action.payload.id}`);

    if (!savedInfo) {
      saveToLocalStorage(`Game${action.payload.id}`, action.payload);
    }
  }

  return result;
};


