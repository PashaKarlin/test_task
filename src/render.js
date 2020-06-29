import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { addPostGlobal } from './Redux/state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostGlobal={addPostGlobal} />
        </React.StrictMode>,
        document.getElementById('root')
    );

}


