import { createStore, combineReducers, applyMiddleware } from "redux";
import { iceCreamReducer } from "./icecream";
import { cakeReducer } from "./cake";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { UserReducer } from "./users";
import thunk from "redux-thunk";
const RootReducer = combineReducers({
  icecream: iceCreamReducer,
  cake: cakeReducer,
  user: UserReducer,
});
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
