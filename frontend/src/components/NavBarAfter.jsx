import React from 'react';
import './NavBarAfter.css'; // optional CSS

const NavBarAfter = () => {
  return (
    <nav className="navbar-after">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/LectureDashboard">Dashboard</a></li>
        <li><a href="/LoginPage">Logout</a></li>
      </ul>
    </nav>
  );
};

export default NavBarAfter;
