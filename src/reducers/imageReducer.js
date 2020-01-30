//REDUCER : checks action and modifies store accordingly
import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  deletedImage: null,
  deletedStatus: false,
  addedStatus: false
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
      console.log("add image hit");
      console.log(action.payload);
      return {
        ...state,
        item: action.payload,
        addedStatus: action.payload.status
      };
    case DELETE_IMAGE:
      console.log("case delete image hit");
      return {
        ...state,
        deletedImage: action.payload.deletedImage,
        deletedStatus: action.payload.status
      };
    default:
      return state;
  }
};

export default imageReducer;
