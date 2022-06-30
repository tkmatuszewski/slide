import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { team } from '../../constants/team';

export default function Staff() {
  return (
    <div className="staff">
      <div className="staff__head">
        <strong>Team</strong>
        {/* <StaticImage src="../../images/about.png" alt="" /> */}
        <p>
          We are not just a company. We are a pack friends looking for new
          people to share our passion with.
        </p>
      </div>
      <div className="staff__cnt">
        <div className="box__cnt">
          {team.map((el) => {
            return (
              <div className="box" key={el.id}>
                <StaticImage
                  // className="box__img"
                  src={el.url}
                  alt="portrait of a man"
                />
                <div className="box__data">
                  <span className="box__name">{el.name}</span>
                  <span className="box__role">{el.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
