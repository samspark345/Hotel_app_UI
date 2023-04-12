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
          <NavLink end to='/Booking'> My Bookings </NavLink>
          <NavLink end to='/customerBookings'> Customer Bookings </NavLink>
          <NavLink end to='/profile'> My Account </NavLink>
          <NavLink end to='/views'> Views </NavLink>

        </div>
      </div>
  )
}

export default Header