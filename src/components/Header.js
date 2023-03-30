import React from 'react'
import './header.css';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
      <div className='nav'>
        <div className='logo'>
          <img src={require('../images/logo.png')}  alt='' className='headerLogo'></img>
        </div>
        <div className='navbarItems'>
          <NavLink end to='/'> Home </NavLink>
          <NavLink end to='/highlights'> Highlights </NavLink>
          <NavLink end to='/'> Home </NavLink>
          <NavLink end to='/'> Home </NavLink>
          <NavLink end to='/'> Home </NavLink>
          <NavLink end to='/'> Home </NavLink>
        </div>
      </div>
  )
}

export default Header