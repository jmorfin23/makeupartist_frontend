import { APP_ERROR, HIDE_ERROR, POST_ERROR } from "../actions/types.js";

const initialState = {
  error: null,
  post_error: { status: false, message: null },
  isOpen: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ERROR:
      return {
        post_error: {
          status: true,
          message: action.payload
        }
      };
    case APP_ERROR:
      return {
        error: action.payload,
        isOpen: true
      };
    case HIDE_ERROR:
      return {
        error: null,
        isOpen: false
      };
    default:
      return state;
  }
};

export default errorReducer;
