import {
  LOGIN_ADMIN,
  UPDATE_PASSWORD,
  REGISTER_ADMIN,
  ADMIN_AUTH,
  LOGOUT_ADMIN
} from "../actions/types.js";

const initialState = {
  isLogged: false,
  password_updated: false
};

//can consolodate this
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AUTH:
    case LOGOUT_ADMIN:
    case LOGIN_ADMIN:
    case REGISTER_ADMIN:
      return {
        ...state,
        isLogged: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password_updated: true
      };
    default:
      return state;
  }
};

export default userReducer;
