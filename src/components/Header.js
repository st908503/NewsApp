import React from 'react'
// import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import './NewsList.css';

import { Link } from 'react-router-dom';
const Header = ({ size, setShow }) => {
  return (

    <div className='nav'>
      <div onClick={() => setShow(true)}>
        <Link className='logo' to='/'>NEWSNATION</Link>
      </div>
      <div className='bookmark' onClick={() => setShow(false)}>

        <span className='count'>{size}</span>
        <Link className='icon' to='/bookmark'><BsFillBookmarkStarFill /></Link>
      </div>
    </div>

  )
}

export default Header