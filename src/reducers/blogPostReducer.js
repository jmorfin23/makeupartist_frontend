import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  DELETE_BLOG_POST,
  GET_REQUESTED_NUM_BLOGPOST,
  FETCH_NEXT_POSTS
} from "../actions/types.js";

const initialState = {
  adminPosts: [],
  posts_by_page: {
    posts: [],
    info: {}
  },
  singlePost: {
    post: {},
    nextPosts: []
  },
  home_posts: []
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return {
        ...state,
        adminPosts: action.payload
      };
    case ADD_BLOG_POST:
      return {
        ...state,
        adminPosts: [action.payload.data, ...state.adminPosts],
        posts_by_page: {
          posts: [action.payload.data, ...state.posts_by_page.posts]
        }
      };
    case GET_SINGLE_BLOGPOST:
      return {
        ...state,
        singlePost: action.payload
      };
    case DELETE_BLOG_POST:
      return {
        ...state,
        adminPosts: [
          ...state.adminPosts.filter(value => value.id !== action.payload.data)
        ]
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
