import React from 'react';
import { team } from '../../constants/team';

export default function Staff() {
  return (
    <div className="staff">
      <div className="staff__cnt">
        <div className="staff__head">
          <strong>Crew</strong>
        </div>
        <div className="box__cnt">
          {team.map((el) => {
            return (
              <div className="box" key={el.id}>
                <img
                  className="box__img"
                  src={el.url}
                  alt="portrait of a man"
                />
                <div className="box__data">
                  <span className="box__name">{el.name}</span>
                  <span>{el.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
