import { LOGIN_ADMIN } from "./types.js";

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
