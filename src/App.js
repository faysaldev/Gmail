import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './Header';
import Home from './Home'
import Sidbar from './Sidbar';
import EmailPage from './EmailPage';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/mailSlice'
import {login, selectUser} from './features/useSlice'
import {useDispatch, useSelector} from 'react-redux'
import LoginPage from './LoginPage';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen =useSelector(selectSendMessageIsOpen);
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    dispatch(login({
      displayName: user.displayName,
      photoUrl:user.photoURL,
      email:user.email
    }))
  }
})
},[])

  return (
     <Router>

    {!user ? (<LoginPage />):(
    <div className="app">

        <Header />

    <div className="app__body">
        <Sidbar />

        <Switch>

        <Route path="/email" >
          <EmailPage />
        </Route>

          <Route path="/" exact >
          <Home />
          </Route>
        </Switch>


        </div>

               {sendMessageIsOpen && <SendMail />}
    </div>
    )}
   </Router>
  );
}

export default App;
