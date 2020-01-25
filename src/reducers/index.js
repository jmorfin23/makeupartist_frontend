import { combineReducers } from "redux";
import imageReducer from "./imageReducer.js";
import blogPostReducer from "./blogPostReducer.js";

const allReducers = combineReducers({
  images: imageReducer,
  posts: blogPostReducer
});

export default allReducers;
