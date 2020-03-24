import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const renderApp = () => {
ReactDOM.render(<App
    store = {store}
    butAddNumber = {store.butAddNumber.bind(store)}
    dispatch = {store.dispatch.bind(store)}
    setFnAction = {store.setFnAction.bind(store)}
    resultAction = {store.resultAction.bind(store)}
/> , document.getElementById('root'));
}

renderApp();
store.subscriber(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
