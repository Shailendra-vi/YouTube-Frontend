import React, { useState } from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "./youtube-logo.jpg";
import Avatar from '@mui/material/Avatar';
import photo from "./image.jpg";
import { Link } from "react-router-dom";

function Header({childtoParent}) {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img className="header__logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon onClick={()=>childtoParent(inputSearch)} className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="" src={photo} />
      </div>

    </div>
    
  )
  
}

export default Header;