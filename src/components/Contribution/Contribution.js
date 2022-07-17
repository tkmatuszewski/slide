import React from 'react';
import './Contribution.scss';

const Contiburion =()=> {
  return (
    <div className="credits">
      <div className="credits__cnt">
        <div className="group">
          <strong>Icons</strong>
          <span>Icons8</span>
        </div>
        <div className="group">
          <strong>Photos</strong>
          <span>Unsplash</span>
          <span>Pexels</span>
        </div>
        <div className="group">
          <strong>Fonts</strong>
          <span>Google Fonts</span>
        </div>
        <div className="group">
          <strong>Inspiration</strong>
          <span>Awwwards</span>
          <span>CSS Design Awards</span>
        </div>
      </div>
    </div>
  );
}

export default Contiburion;