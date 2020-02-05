import { FETCH_BLOG_POSTS, ADD_BLOG_POST } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_BLOG_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default blogPostReducer;
