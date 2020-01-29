//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  deletedImage: null
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
    case DELETE_IMAGE:
      console.log("case delete image hit");
      console.log(action.payload);
      return {
        ...state,
        deleteSuccessful: action.payload.deleted
      };
    default:
      return state;
  }
};

export default imageReducer;
