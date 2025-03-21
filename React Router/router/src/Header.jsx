import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="Sobre">
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={{ color: 'tomato' }} to="login">
        Login
      </NavLink>
      
    </nav>
  );
};

export default Header;
