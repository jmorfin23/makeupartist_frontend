import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  DELETE_BLOG_POST,
  GET_REQUESTED_NUM_BLOGPOST
} from "../actions/types.js";

const initialState = {
  items: { data: [] },
  item: {},
  singlePost: {},
  deletedStatus: {},
  home_posts: { data: [] }
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
