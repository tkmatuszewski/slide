import React from 'react';
import Button from '../Button/Button';
import { Link } from "gatsby";
import './Feat.scss';

const Feat = ({ feat, children }) => {
  
  const { name, desc, link, btn } = feat;

  return (
    <>
      <section className="feat__wrapper">
        {children}
        <div className={children? "feat" : "feat wide"}>
            <strong>{name}</strong>
            <p>{desc}</p>
            {link ? (
              <Link to={link}>
                <Button name={btn} cl={"btn"} />
              </Link>
            ) : null}
        </div>
      </section>
    </>
  );
};

export default Feat