import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import * as serviceWorker from './serviceWorker';

import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';

import { contentReducer } from "./reducer/reducer";
import createSageMiddleware from 'redux-saga';
import mySaga from './saga/mysaga';


// create the saga middleware
const sagaMiddleware = createSageMiddleware();
const state = createStore(
    contentReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={state}>
        <Container />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
