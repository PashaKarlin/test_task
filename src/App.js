import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'


function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <NavBar state = {props.state.sidebar.friends}/>
        <div className='app_wrapper_content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPostGlobal={props.addPostGlobal}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
