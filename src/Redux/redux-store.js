import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({// наш state
    profilePage: profileReducer, //У нас есть dialogsPage и за него отвечает dialogsReducer
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

let store = createStore(reducers)

export default store;