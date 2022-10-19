import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
        <h3>
            <Link style={navStyle} to='/'>
            Deep Face Detection
            </Link>
        </h3>
        <ul className='nav-links'>
            <Link style={navStyle} to='/About'>
            <li>About</li>
            </Link>
            <Link style={navStyle} to='/Contact'>
            <li>Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
