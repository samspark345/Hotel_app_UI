import React from 'react'
import './header.css';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
      <div className='nav'>
        <div className='logo'>
        <NavLink end to='/hotels'> 
          <img src={require('../images/logoHotels.png')}  alt='' className='headerLogo'></img>
        </NavLink>
        </div>
        <div className='navbarItems'>
          <NavLink end to='/hotels'> Hotels </NavLink>
          <NavLink end to='/Dashboard'> MyBookings </NavLink>
          <NavLink end to='/Dashboard'> MyAccount </NavLink>
        </div>
      </div>
  )
}

export default Header