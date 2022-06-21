import React from 'react';
import { Link } from "gatsby";

export default function Header() {
  return (
    <div className="header">
      <div className="nav__cnt">
        <nav className="nav">
          <Link to='/about'>About</Link>
          <Link to='/offer'>Offer</Link>
          <Link to='/' id="log">
            Slide.
          </Link>
          <Link to='/team'>Team</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    </div>
  );
}
