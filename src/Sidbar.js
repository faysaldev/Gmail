import React from 'react'
import {Button, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SidbarRow from './SidbarRow'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import {openSendMessage} from './features/mailSlice'


function Sidbar() {

     const dispatch = useDispatch()

    return (
        <div className="sidbar">
            <Button onClick={()=> dispatch(openSendMessage())} className="compres" startIcon={<AddIcon className="add__icon" />} fontSize="large">Compose</Button>

            <SidbarRow active Icon={InboxIcon} title="Inbox" number="30" />

            <SidbarRow Icon={StarIcon} title="Starred" number="34" />
            <SidbarRow  Icon={AccessTimeIcon} title="Snoozed" number="54" />
            <SidbarRow  Icon={LabelImportantIcon} title="Importent" number="64" />

            <SidbarRow  Icon={NearMeIcon} title="Sent" number="13" />
            <SidbarRow  Icon={NoteIcon} title="Drafets" number="23" />
            <SidbarRow  Icon={ExpandMoreIcon} title="More" number="34" />


            <div className="sidebar__fotter">
                <div className="sidbar__fotterIcon">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidbar
