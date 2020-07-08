import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import { Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <NavBar store={props.store} />
        <div className='app_wrapper_content'>
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
