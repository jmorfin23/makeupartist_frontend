import { combineReducers } from "redux";
import imageReducer from "./imageReducer.js";
import blogPostReducer from "./blogPostReducer.js";
import userReducer from "./userReducer.js";
import errorReducer from "./errorReducer.js";
import isLoadingReducer from "./isLoadingReducer.js";
import notificationReducer from "./notificationReducer.js";

const allReducers = combineReducers({
  loading: isLoadingReducer,
  notification: notificationReducer,
  error: errorReducer,
  images: imageReducer,
  blogposts: blogPostReducer,
  user: userReducer
});

export default allReducers;
