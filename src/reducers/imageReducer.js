//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "../actions/types.js";

const initialState = {
  images: []
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [action.payload.data, ...state.images]
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: [
          ...state.images.filter(value => value.id !== action.payload.data.id)
        ]
      };
    default:
      return state;
  }
};

export default imageReducer;
