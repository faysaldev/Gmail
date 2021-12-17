import React, { useEffect, useState } from 'react'
import './Home.css';
import EmailListOption from './EmailListOption';
import EmailListRow from './EmailListRow';
import { Checkbox,IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { db } from './firebase';
import FlipMove from 'react-flip-move';



function Home() {

    const [emails,setEmails] =useState([]);

    useEffect(()=>{
        db.collection('email').orderBy('timestamp','desc').onSnapshot(snapshot=> {
            setEmails(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])

    return (
        <div className="home">
            <div className="email__listSetting">
                <div className="listSetting__left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="listSetting__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>


            <div className="emaillist__options">
                <EmailListOption active Icon={InboxIcon} title="Primary" color="red" />
                <EmailListOption Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <EmailListOption Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>


            <FlipMove>

            {emails.map(({id,data: { to, subject,message,timestamp }})=>(
            <EmailListRow id={id} key={id} des={message} title={to} time={new Date(timestamp?.seconds * 1000).toUTCString()} subject={subject} />
            ))}
            
            </FlipMove>
            
            
        </div>
    )
}

export default Home
