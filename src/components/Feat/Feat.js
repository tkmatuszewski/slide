import React from 'react';
import Button from '../Button/Button';
import { Link } from "gatsby";
// import { StaticImage } from 'gatsby-plugin-image';

const Feat = ({ feat, children }) => {
  return (
    <>
      <section className="feat__wrapper">
        {children}
        <div className="feat__cnt">
          {/* {feat.img__side ? <div className="feat__circle">{children}</div> : null} */}
          <div className={feat.class}>
            <strong>{feat.name}</strong>
            <p>{feat.desc}</p>
            {feat.link ? (
              <Link to={feat.link}>
                <Button name={feat.btn} className={"button"} />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feat