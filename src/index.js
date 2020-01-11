import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import allReducers from './reducer';
import { Provider } from 'react-redux';


//ACTION - returns an object

//REDUCER - takes car of our actions


// STORE -> GLOBAL STATE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//display it in console
// store.subscribe(()=> console.log(store.getState()));


//DISPATCH
// store.dispatch(adminLogin());


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);
