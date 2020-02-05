import { LOGIN_ADMIN } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  isLogged: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        items: action.payload,
        isLogged: action.payload.data.status
      };
    default:
      return state;
  }
};

export default userReducer;
