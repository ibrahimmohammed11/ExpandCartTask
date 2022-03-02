import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/combineReducers";

let middleWares = [thunk];

let store = createStore(rootReducer, applyMiddleware(...middleWares));
export default store;
