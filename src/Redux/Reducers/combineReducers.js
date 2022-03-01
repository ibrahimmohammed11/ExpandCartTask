import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer.js";
import SetTagsReducer from "./setTagsReducers.js";

export let rootReducer = combineReducers({
  DataReducer,
  SetTagsReducer,
});
