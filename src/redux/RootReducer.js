import { createStore, combineReducers, applyMiddleware } from "redux";
import { iceCreamReducer } from "./icecream";
import { cakeReducer } from "./cake";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const RootReducer = combineReducers({
  icecream: iceCreamReducer,
  cake: cakeReducer,
});
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
