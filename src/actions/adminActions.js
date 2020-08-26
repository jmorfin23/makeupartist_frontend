import {
  LOGIN_ADMIN,
  REGISTER_ADMIN,
  CHECK_USER,
  UPDATE_PASSWORD,
  APP_ERROR,
  ADMIN_AUTH,
  LOGOUT_ADMIN
} from "./types.js";

export const authenticateAdmin = token => {
  console.log("authenticate admin");
  return async function(dispatch) {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/admin-auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token
        }
      });

      const res = await response.json();

      if (res.status === "ok") {
        console.log("authentication success");
        dispatch({
          type: ADMIN_AUTH,
          payload: true
        });
      } else if (res.status === "expired") {
        console.log("auth expired");
        dispatch({
          type: LOGOUT_ADMIN,
          payload: res.data
        });
      } else {
        console.log("auth failed");
        dispatch({
          type: APP_ERROR,
          payload: res.error
        });
      }
    } catch (error) {
      // ** issue with this **s
      dispatch({
        type: APP_ERROR,
        payload: "failed to fetch in authenticating user" // add error to payload to replicate
      });
    }
  };
};

export const loginAdmin = token => {
  console.log("inside login admin");
  return async function(dispatch) {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/admin-login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token
        }
      });
      const res = await response.json();

      if (res.status === "ok") {
        // add token to local storage
        console.log("success user can be logged in.");
        localStorage.setItem("token", res.data);
        dispatch({
          type: LOGIN_ADMIN,
          payload: true
        });
      } else {
        dispatch({
          type: APP_ERROR,
          payload: res.error
        });
      }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error
      });
    }
  };
};

export const registerAdmin = token => {
  return async function(dispatch) {
    console.log("inside register admin");
    try {
      const response = await fetch("http://127.0.0.1:5000/api/admin-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token
        }
      });
      const res = await response.json();

      if (res.status === "ok") {
        // ADD token to local storage
        localStorage.setItem("token", res.data);
        dispatch({
          type: REGISTER_ADMIN,
          payload: true
        });
      } else {
        dispatch({
          type: APP_ERROR,
          payload: res.error
        });
      }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error
      });
    }
  };
};

//TODO: create password reset functionality
export const resetPassword = email => {
  return function(dispatch) {
    console.log("inside reset admin password");
    fetch("http://127.0.0.1:5000/api/reset-password", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: email
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: CHECK_USER,
          payload: data
        })
      );
  };
};

//TODO: updating password
export const updatePassword = (new_pass, token) => {
  console.log("inside update passsword");
  return function(dispatch) {
    fetch("http://127.0.0.1:5000/api/change_password", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        password: new_pass,
        token: token
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: UPDATE_PASSWORD,
          payload: data
        })
      );
  };
};
