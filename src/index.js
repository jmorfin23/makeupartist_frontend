import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { images } from "./reducers/images.js";

//TODO: finish redux setup for updating images;

//STORE -> GLOBAL state
const store = createStore(images);
//dispatch : the way we execute the action "dispatch action to reducer"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
