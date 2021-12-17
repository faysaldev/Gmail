import React from 'react'
import './Email.css'
import {IconButton} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import {selectOpenMail} from './features/mailSlice'
import { useSelector } from 'react-redux';
import { db } from './firebase';


function EmailPage() {

    const history =useHistory();
    const selectMail = useSelector(selectOpenMail);
    
    const DeleteEmail=()=>{
        db.collection('email').doc(selectMail.id).delete();
        alert("Sucessfully Deleted!")
        history.push('/')
    }

return (
<div className="email">
           <div className="mail__tools">
               <div className="tools__left">
                    <IconButton onClick={()=> history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton onClick={DeleteEmail}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
               </div>

               <div className="tools__right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
               </div>
           </div>

           <div className="mail__body">
               <div className="mail__bodyHeader">
                   <h2>{selectMail?.subject}</h2>
                   <LabelImportantIcon className="mail__important" />
                   <p>{selectMail?.title}</p>
                   <p className="mail__time">{selectMail?.time}</p>
               </div>

               <div className="mail__messages">
                   <p>{selectMail?.des}</p>
               </div>
           </div>
        </div>
    )
}

export default EmailPage
