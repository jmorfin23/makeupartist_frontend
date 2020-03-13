import { LOGIN_ADMIN, CHECK_USER, UPDATE_PASSWORD } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  isLogged: false,
  password_update: {},
  password_reset: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        items: action.payload,
        isLogged: action.payload.data.status
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
