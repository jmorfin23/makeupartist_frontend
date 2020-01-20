//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, NEW_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      console.log("reducer");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default imageReducer;
