import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import testReducer from "./store/reducers/test"
import chartReducer from './store/reducers/chart'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    test: testReducer,
    chart: chartReducer,
  });
  
  const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));
  

const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);


