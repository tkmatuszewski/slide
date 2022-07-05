import React from 'react';

export function Program({ id }) {
  return (
    <>
      <div className="program" style={{ background: id.bg }}>
        <div className="program__card">
          <div className="program__card__scn">
            <strong>Entry point</strong>
            <ul>
              {id.entry.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </div>
          <div className="program__card__scn">
            <strong>Expect</strong>
            <ul>
              {id.master.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
