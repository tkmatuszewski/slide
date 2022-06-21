import React from 'react'
import { Link } from "gatsby";

export const Feat = ({ feat }) => {
  return (
    <>
      <section className="feat__wrapper">
        <div className="feat__cnt">
          <div className="feat">
            <strong>{feat.name}</strong>
            <p>{feat.desc}</p>
            <Link to={feat.link}>
              <Button name={feat.btn} className={"button"} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};