//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const imageReducer = (state = initialState, action) => {
  console.log("image reducer");
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        items: action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default imageReducer;
