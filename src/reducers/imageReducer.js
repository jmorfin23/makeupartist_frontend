//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, NEW_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const imageReducer = (state = initialState, action) => {
  console.log("image reducer");
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
