import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  DELETE_BLOG_POST
} from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  singlePost: {},
  deletedStatus: {}
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      console.log("BLOGPOST REDUCER");
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };
    case ADD_BLOG_POST:
      return {
        ...state,
        item: action.payload
      };
    case GET_SINGLE_BLOGPOST:
      return {
        ...state,
        singlePost: action.payload
      };
    case DELETE_BLOG_POST:
      return {
        ...state,
        deletedStatus: action.payload
      };
    default:
      return state;
  }
};

export default blogPostReducer;
