import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import ErrorBoundary from "./components/errorBoundary";
import jwt_decode from "jwt-decode";
import { LOGIN_ADMIN } from "./actions/types";

try {
  const token = localStorage.getItem("token");
  if (token) {
    if (Date.now() / 1000 > jwt_decode(token).exp) {
      localStorage.removeItem("token");
    } else {
      store.dispatch({ type: LOGIN_ADMIN, payload: true });
    }
  }
} catch (error) {
  console.log(error);
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
