import { MainImage } from 'gatsby-plugin-image';
import React from 'react';
import { team } from '../../constants/team';

export default function Staff() {
  return (
    <>
      <div className="staff">
        <strong>Team</strong>
        <p>
          We are not just a company. We are a pack friends looking for new
          people to share our passion with.
        </p>
      </div>
      <div className='staff__bbq'>
        <MainImage src="https://unsplash.com/photos/x9I-6yoXrXE" alt=""/>
      </div>
        <div className="staff__box__cnt">
          {team.map((el) => {
            return (
              <div className="box" key={el.id}>
                <MainImage src={el.url} alt="" className="team__img"/>
                <div className="box__data">
                  <span className="box__name">{el.name}</span>
                  <span className="box__role">{el.role}</span>
                </div>
                <p className="box__det">{el.det}</p>
              </div>
            );
          })}
        </div>
    </>
  );
}
