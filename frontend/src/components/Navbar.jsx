import React from 'react';
import LoginPage from './LoginPage';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* <a href="#home">Home</a> */}
      <a href="/research-opportunities">Browse Researches</a>
      <a href="/contact">Contact</a>
      <Link to="/LoginPage">Login</Link>
    </nav>
  );
};

export default Navbar;