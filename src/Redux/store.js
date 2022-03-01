import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/combineReducers";

let middleWares = [thunk];

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
