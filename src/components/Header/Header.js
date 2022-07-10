import React, {useState} from 'react';
import { Link } from "gatsby";
import './Header.scss';

export default function Header() {

  const [showMenu, setShowMenu]= useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu)
  }

  return (
    <div className="header">
      <button className="nav__btn" onClick={(e) => handleClick(e)}>
        Menu
      </button>
      <div className={showMenu ? "nav__cnt" : "nav__cnt hide"}>
        <nav className={showMenu ? "nav" : "nav hide"}>
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/offer">Offer</Link>
          <Link to="/" id="log">
            Slide.
          </Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
