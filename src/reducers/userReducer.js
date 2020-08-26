import {
  LOGIN_ADMIN,
  CHECK_USER,
  UPDATE_PASSWORD,
  REGISTER_ADMIN,
  ADMIN_AUTH,
  LOGOUT_ADMIN
} from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  isLogged: false,
  password_update: {},
  password_reset: {}
};

//can consolodate this
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AUTH:
      return {
        ...state,
        isLogged: action.payload
      };
    case LOGOUT_ADMIN:
      return {
        ...state,
        isLogged: action.payload
      };
    case LOGIN_ADMIN:
      return {
        ...state,
        isLogged: action.payload
      };
    case REGISTER_ADMIN:
      return {
        ...state,
        isLogged: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password_update: action.payload
      };
    case CHECK_USER:
      return {
        ...state,
        password_reset: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
