import { LOGIN_ADMIN, REGISTER_ADMIN, RESET_PASSWORD } from "./types.js";

export const loginAdmin = userData => {
  return function(dispatch) {
    console.log("inside login admin");
    fetch("http://127.0.0.1:5000/api/admin-login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        data: JSON.stringify(userData)
      }
    })
      .then(res => res.json())
      .then(user =>
        dispatch({
          type: LOGIN_ADMIN,
          payload: user
        })
      );
  };
};

export const registerAdmin = userData => {
  return function(dispatch) {
    console.log("inside register admin");
    fetch("http://127.0.0.1:5000/api/admin-register", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        data: JSON.stringify(userData)
      }
    })
      .then(res => res.json())
      .then(user =>
        dispatch({
          type: REGISTER_ADMIN,
          payload: user
        })
      );
  };
};

//TODO: create password reset functionality
export const resetPassword = userData => {
  return function(dispatch) {
    console.log("inside reset admin password");
    fetch("http://127.0.0.1:5000/api/reset-password", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        data: JSON.stringify(userData)
      }
    })
      .then(res => res.json())
      .then(user =>
        dispatch({
          type: REGISTER_ADMIN,
          payload: user
        })
      );
  };
};
