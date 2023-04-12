import React from 'react'
import './header.css';
import {Link, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const userState = useSelector((state) => state.User)
  return (
      <div className='nav'>
        <div className='logo'>
        <NavLink end to='/hotels'> 
          <img src={require('../images/logoHotels.png')}  alt='' className='headerLogo'></img>
        </NavLink>
        </div>
        <div className='navbarItems'>
          {(userState.customerInfo || userState.employeeInfo ) && <NavLink end to='/hotels'> Hotels </NavLink>}
          {userState.customerInfo &&<NavLink end to='/Booking'> My Bookings </NavLink>}
          {userState.employeeInfo && <NavLink end to='/customerBookings'> Customer Bookings </NavLink>}
          {(userState.customerInfo || userState.employeeInfo ) && <NavLink end to='/profile'> My Account </NavLink>}
          {(userState.customerInfo || userState.employeeInfo ) && <NavLink end to='/views'> Views </NavLink>}
          {userState.employeeInfo && <NavLink end to='/archives'> Archives </NavLink>}

        </div>
      </div>
  )
}

export default Header