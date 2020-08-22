import { APP_ERROR, HIDE_ERROR } from "../actions/types.js";

const initialState = {
  error: null,
  isOpen: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
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
