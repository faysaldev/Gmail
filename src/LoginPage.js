import React from 'react'
import './login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import {login} from './features/useSlice'
import { useDispatch } from 'react-redux'


function LoginPage() {

    const dispatch = useDispatch();

    const signInHandler=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>  dispatch(login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
        })))
        .catch((error)=> console.log(error))
    }

    return (
        <div className="login">
           <div className="login__container">
               <img src="/login.jpg" />
               <Button variant="contained" color="primary" onClick={signInHandler}>Login</Button>
           </div>
        </div>
    )
}

export default LoginPage
