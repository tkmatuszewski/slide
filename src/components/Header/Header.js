import React, {useState} from 'react';
import { Link } from "gatsby";

export default function Header() {

  const [showMenu, setShowMenu]= useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu)
  }

  return (
    <div className="header">
      {/* <div className="nav__cnt">
        <button className="nav__btn" onClick={(e) => handleClick(e)}>
          Menu
        </button>
        <nav className="nav">
          <Link to="/" className='home'>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/offer">Offer</Link>
          <Link to="/" id="log">
            Slide.
          </Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div> */}
    </div>
  );
}
