import { LOGIN_ADMIN } from "../actions/types.js";

const initialState = {
  items: [],
  item: {},
  isLogged: false
};

const userReducer = (state = initialState, action) => {
  console.log("inside user reducer");
  switch (action.type) {
    case LOGIN_ADMIN:
      console.log("admin login hit");
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
