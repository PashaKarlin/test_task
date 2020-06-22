import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const posts = [
  { id: 1, message: 'Hi, how are you', likesCount: 12 },
  { id: 2, message: 'Its my first post', likesCount: 21 },
]
const dialogs = [
  { id: 1, name: 'Pasha' },
  { id: 2, name: 'Mitya' },
  { id: 3, name: 'Tolik' },
  { id: 4, name: 'Sanya' },
  { id: 5, name: 'Vlad' },
]

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yewwww' },
  { id: 5, message: 'HAllooooo' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

