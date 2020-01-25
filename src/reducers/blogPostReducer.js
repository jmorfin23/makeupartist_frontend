import { FETCH_BLOG_POSTS } from "../actions/types.js";

const initialState = {
  items: [],
  item: {}
};

const blogPostReducer = (state = initialState, action) => {
  console.log("blog post reducer");
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      console.log("fetching posts");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default blogPostReducer;
