import {
  LOGIN_ADMIN,
  REGISTER_ADMIN,
  CHECK_USER,
  UPDATE_PASSWORD,
  APP_ERROR,
  ADMIN_AUTH,
  LOGOUT_ADMIN
} from "./types.js";

// authenticate admin
export const authenticateAdmin = token => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/admin-auth",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: ADMIN_AUTH,
          payload: true
        });
      } else if (res.status === "expired") {
        dispatch({
          type: LOGOUT_ADMIN,
          payload: res.data
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
        payload: error.toString()
      });
    }
  };
};

// login admin
export const loginAdmin = credentials => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/admin-login",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${credentials}`
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        // add token to local storage
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
        payload: error.toString()
      });
    }
  };
};

//register an admin
export const registerAdmin = credentials => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/admin-register",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${credentials}`
          }
        }
      );
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
        payload: error.toString()
      });
    }
  };
};

// admin password reset functionality
export const resetPassword = email => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(email)
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: CHECK_USER,
          payload: res
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
        payload: error.toString()
      });
    }
  };
};

// Updating admin password
export const updatePassword = (new_pass, token) => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/change_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(new_pass)
        }
      );
      const res = await response.json();
      res.status === "ok"
        ? dispatch({
            type: UPDATE_PASSWORD,
            payload: res
          })
        : dispatch({
            type: APP_ERROR,
            payload: res.error
          });
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error.toString()
      });
    }
  };
};
