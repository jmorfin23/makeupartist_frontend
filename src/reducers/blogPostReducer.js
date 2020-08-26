import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  DELETE_BLOG_POST,
  GET_REQUESTED_NUM_BLOGPOST
} from "../actions/types.js";

const initialState = {
  items: [], //dont need this but will cause error if deleted in admin view
  item: {},
  singlePost: { post: {}, nextPosts: [] },
  deleted: false,
  added: {},
  home_posts: [],
  message: ""
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
        message: action.message
      };
    case GET_SINGLE_BLOGPOST:
      return {
        ...state,
        singlePost: action.payload
      };
    case DELETE_BLOG_POST:
      return {
        ...state,
        deleted: action.payload,
        message: action.message
      };
    case GET_REQUESTED_NUM_BLOGPOST:
      return {
        ...state,
        home_posts: action.payload
      };
    default:
      return state;
  }
};
export default blogPostReducer;
