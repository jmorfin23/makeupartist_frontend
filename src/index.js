import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import ErrorBoundary from "./components/errorBoundary";
import { authenticateAdmin } from "./actions/adminActions";
import jwt_decode from "jwt-decode";
import { LOGOUT_ADMIN } from "./actions/types";

//STORE -> GLOBAL state

//dispatch : the way we execute the action "dispatch action to reducer"

// Checking if token is still valid - if not valid logout user
const token = localStorage.getItem("token");
if (token) {
  console.log("checking if token is expired");
  if (Date.now() / 1000 > jwt_decode(token).exp) {
    console.log("token is expired");
    // Logout admin
    store.dispatch({ type: LOGOUT_ADMIN, payload: false });
  } else {
    console.log("TOKEN IS STILL VALID");
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
