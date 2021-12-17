import React, { forwardRef } from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectmail} from './features/mailSlice'

const EmailListRow=forwardRef(({id,des,title,subject,time},ref)=>{

    const history = useHistory();

     const dispatch = useDispatch()

    const openMail=()=>{
        dispatch(selectmail({
            id,title,des,subject,time,
        }));

        history.push('/email')
    }


    return (
        <div className="email__listRow" onClick={openMail} ref={ref}>
           <div className="emailRow__options">
               <Checkbox />

               <IconButton>
                <StarOutlineIcon />
               </IconButton>

               <IconButton>
                <LabelImportantIcon />
               </IconButton>
           </div>

                <h3>{title}</h3>

                <div className="emailRow__messages">
                <h4>{subject}</h4>
                <span>{des}</span>
                </div>

                <div className="time">{time}</div>
        </div>
    )
})

export default EmailListRow
