//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  deletedImage: {},
  deletedStatus: false,
  addedStatus: false,
  error: {}
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        items: action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        item: action.payload,
        addedStatus: action.payload.status
      };
    case DELETE_IMAGE:
      return {
        ...state,
        item: action.payload,
        deletedImage: action.payload.deletedImage,
        deletedStatus: action.payload.status,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default imageReducer;
