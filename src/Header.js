import React from 'react'
import { IconButton, Link } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { selectUser } from './features/useSlice';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './features/useSlice'
import { auth } from './firebase';


function Header() {

    const history =useHistory();
    const user =useSelector(selectUser);
    const dispatch = useDispatch();

    const singOut=()=>{
        auth.signOut().then(()=> {
            dispatch(logout());
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                <MenuIcon />
                </IconButton>

               <Link to="/" onClick={()=> history.push('/')}>
               <img src="logo.png"/>
               </Link>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search in Gmail..." />
                <ArrowDropDownIcon className="arrow__icon" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>

                <Avatar className="avatar" src={user?.photoUrl} onClick={singOut} />
            </div>
        </div>
    )
}

export default Header
