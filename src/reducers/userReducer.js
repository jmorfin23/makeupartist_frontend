import { LOGIN_ADMIN, RESET_PASSWORD } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  isLogged: false,
  password_update: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        items: action.payload,
        isLogged: action.payload.data.status
      };
    case RESET_PASSWORD:
      return {
        ...state,
        password_update: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
