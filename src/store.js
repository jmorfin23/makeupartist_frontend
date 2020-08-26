import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware, logger)
);

export default store;
