
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, { subscribe, addPostGlobal, updateNewPostText } from './Redux/state';
import state from './Redux/state';


let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            {/* <App state={state} addPostGlobal={store.addPostGlobal.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)}/> */}
            <App state={store.getState()} addPostGlobal={store.addPostGlobal.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

// rerenderEntireTree(store.getState()
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

