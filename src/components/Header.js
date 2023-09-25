import React from 'react';
import './header.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>Token Gated Ticketing System</h3>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/database">Database</Link></li>
          <li><Link to="/entryform">Report an Incident</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
