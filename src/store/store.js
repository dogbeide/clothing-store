import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/* CURRYING */
/* FOO THAT RETURNS ANOTHER FOO */
/* fn generator */
/* add parameters in stages */

// const curryFoo = (a) => (b, c) => {
//   a + b - c
// }

// const with3 = curryFoo(3); // (b, c) => { 3 + b - c}
// const with10 = curryFoo(10); // (b, c) => { 10 + b - c

// with3(2, 4); // 3 + 2 - 4

const ourLoggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [ourLoggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
