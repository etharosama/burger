import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './compounts/App'; //src\compounts\App.js
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import thunk from 'redux-thunk';

import { createStore , applyMiddleware, compose } from 'redux'
import reducer from './reducer/indexs.js'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware=store=>{
  return next =>{
    return action =>{
      const result = next(action)
      return result
    }
  }
};
const store = createStore( reducer , composeEnhancers(applyMiddleware(middleware ,thunk )))

ReactDOM.render(

  <Router basename='/burgerApp/'>
  <Provider store ={store }>
    <React.StrictMode>
       <App />
    </React.StrictMode>
    </Provider>
  </Router>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
