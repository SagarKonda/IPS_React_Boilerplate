import { all } from "redux-saga/effects";
import createMiddlewareSaga from "redux-saga";

import { watchers as home } from "./home";

const transform = watchers => watchers.map(watcher => watcher());

export const middlewareSaga =
  typeof createMiddlewareSaga === "function"
    ? createMiddlewareSaga()
    : createMiddlewareSaga.default();

export function* rootSaga() {
  yield all([
    ...transform(home)
  ]);
}
