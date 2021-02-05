import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Screen/main';
import EditPost from './Screen/EditPosts';
import postReducer from './Reducer/postReducer'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(postReducer)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route path="/EditPost" component={EditPost} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
serviceWorker.unregister();
