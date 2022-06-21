import React from 'react'
// import { Link } from 'gatsby';


export function Program({ id }) {
  return (
      <div className="program__card">
        {/* <img className="program__photo" src={} alt=""/> */}
        <h3>{id.name}</h3>
        <p>{id.level}</p>
      </div>
    // </Link>
  );
}
