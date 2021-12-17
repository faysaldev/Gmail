import React, { useState } from 'react'
import './Sendmail.css'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from './features/mailSlice'
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {

     const dispatch = useDispatch();

 const [to,setTo] =useState('');
 const [sub,setSub] =useState('');
 const [message,setMessage] =useState('');
 const [error,seterror] =useState(false);


    const submitHandler=(e)=>{
        e.preventDefault();

            
        db.collection('email').add({
            to:to,
            subject:sub,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setTo('')
        setSub('')
        setMessage('')

        dispatch(closeSendMessage());

    }
    

    return (
        <div className="sendmail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="close__icon" onClick={()=> dispatch(closeSendMessage())} />
            </div>

            <form>
                <input onChange={(e)=> setTo(e.target.value)} required placeholder="To" type="email" />

                <input onChange={(e)=> setSub(e.target.value)} required placeholder="Subject" type="text" />

                <input onChange={(e)=> setMessage(e.target.value)} required placeholder="Message..."  type="text" className="send__message" /> 
                {error &&  <p className="error">This Feild are requerd!</p>}

                <div className="submit__btn">
                <Button type="submit" onClick={submitHandler} variant="contained" color="primary">Send</Button>
                </div>
            </form>


        </div>
    )
}

export default SendMail
