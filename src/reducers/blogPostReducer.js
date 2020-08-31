import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  DELETE_BLOG_POST,
  GET_REQUESTED_NUM_BLOGPOST,
  FETCH_NEXT_POSTS
} from "../actions/types.js";

const initialState = {
  items: [], //holds all posts for admin page
  posts_by_page: { posts: [], info: {} }, //holds posts by page number in blog page
  item: {},
  singlePost: {
    post: {
      author: null,
      comments: [],
      content: null,
      data: null,
      id: null,
      path: null,
      url: null
    },
    nextPosts: []
  },
  deleted: false,
  added: {},
  home_posts: [],
  message: null
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
    case FETCH_NEXT_POSTS:
      return {
        ...state,
        posts_by_page: {
          posts: action.payload.posts,
          info: action.payload.info
        }
      };
    default:
      return state;
  }
};
export default blogPostReducer;
