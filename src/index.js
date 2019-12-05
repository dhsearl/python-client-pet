import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import './index.css';
import App from './components/App/App'



const sagaMiddleware = createSagaMiddleware();
// const middlewareList = process.env.NODE_ENV === 'development' ?
//   [sagaMiddleware, logger] :
//   [sagaMiddleware];
const store = createStore(rootReducer, 
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
  //   rootReducer,
    
    // adds all middleware to our project including saga and logger
    applyMiddleware(sagaMiddleware,),
  );
  sagaMiddleware.run(rootSaga);


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

