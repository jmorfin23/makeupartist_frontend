import { combineReducers } from "redux";
import imageReducer from "./imageReducer.js";

const allReducers = combineReducers({
  images: imageReducer
});

export default allReducers;
