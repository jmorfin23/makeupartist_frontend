import {
  ADD_IMAGE,
  HIDE_NOTIFICATION,
  DELETE_IMAGE,
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  CHECK_USER,
  UPDATE_PASSWORD,
  MESSAGE_SENT
} from "../actions/types";

const initialState = {
  isOpen: false,
  message: null
};
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
    case DELETE_IMAGE:
    case ADD_BLOG_POST:
    case DELETE_BLOG_POST:
    case CHECK_USER:
    case UPDATE_PASSWORD:
    case MESSAGE_SENT:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        isOpen: false,
        message: null
      };
    default:
      return {
        ...state
      };
  }
};
export default notificationReducer;
