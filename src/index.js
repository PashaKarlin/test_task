import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
           <App state={store.getState()} store = {store}
           dispatch={store.dispatch.bind(store)} 
           />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

console.log(store.getState())

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


