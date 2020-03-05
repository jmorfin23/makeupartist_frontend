//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  newLength: 0,
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
        newLength: action.payload.newLength,
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
