import { LOADING_DATA, LOADING_FINISHED } from "../actions/types.js";

const isLoadingReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_FINISHED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return {
        ...state
      };
  }
};

export default isLoadingReducer;
