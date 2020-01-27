import { combineReducers } from "redux";
import imageReducer from "./imageReducer.js";
import blogPostReducer from "./blogPostReducer.js";
import userReducer from "./userReducer.js";

const allReducers = combineReducers({
  images: imageReducer,
  posts: blogPostReducer,
  user: userReducer
});

export default allReducers;
