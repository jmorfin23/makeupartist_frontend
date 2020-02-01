import { FETCH_BLOG_POSTS, ADD_BLOG_POST } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const blogPostReducer = (state = initialState, action) => {
  console.log("blog post reducer");
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_BLOG_POST:
      console.log("inside add blog post reducer hit");
      console.log(action.payload);
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default blogPostReducer;
