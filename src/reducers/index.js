import { combineReducers } from "redux";
import imageReducer from "./imageReducer.js";
import blogPostReducer from "./blogPostReducer.js";
import userReducer from "./userReducer.js";
import errorReducer from "./errorReducer.js";
import isLoadingReducer from "./isLoadingReducer";

const allReducers = combineReducers({
  loading: isLoadingReducer,
  error: errorReducer,
  images: imageReducer,
  blogposts: blogPostReducer,
  user: userReducer
});

export default allReducers;
