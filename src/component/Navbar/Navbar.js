import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className='title'>Suyash Shinde</li>
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Project">Project</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
