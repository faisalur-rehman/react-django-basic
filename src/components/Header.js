import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.auth);
  const renderLinks = () => {
    if (state.authenticated) {
      return [
        <li className='nav-item' key='profile'>
          <Link className='nav-link' to='/profile'>
            Profile
          </Link>
        </li>,
        <li className='nav-item' key='logout'>
          <Link className='nav-link' to='/logout'>
            Logout
          </Link>
        </li>,
      ];
    } else {
      return [
        <li className='nav-item' key='login'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>,
        <li className='nav-item' key='signup'>
          <Link className='nav-link' to='/signup'>
            Sign Up
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Auth Demo
      </Link>
      <ul className='navbar-nav'>{renderLinks()}</ul>
    </nav>
  );
};

// function mapStateToProps(state) {
//     return {
//         authenticated: state.auth.authenticated
//     }
// }
export default Header;
