import React , {useState} from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Navbar = () => {
  const [inScroll , setInScroll] = useState(false)

  window.onscroll = () => {
    setInScroll(window.pageYOffset === 0 ? false : true)
  }

  return (
    <div className={inScroll ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo"/>
                </Link>
            </div>
            <div className="right">
                <SearchIcon className="icon"/>
                <NotificationsActiveIcon className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar