import React from 'react';
import Hero from '../../components/Hero/Hero';
import Feat from '../Feat/Feat';
import { hi, offer, about, team, contact } from '../../constants/mainContent'
import { StaticImage } from 'gatsby-plugin-image';
import './Main.scss';

const Main =()=> {
  return (
    <>
      <div className="main__cnt">
        <Hero />
        <Feat feat={hi}></Feat>
        <Feat feat={offer}>
          <StaticImage
            src={"../../images/2men.jpg"}
            alt="Two man smiling on the sufboards"
          />
        </Feat>
        <Feat feat={about}>
          <StaticImage src={"../../images/begginer.jpg"} alt="Girl surfing" />
        </Feat>
        <Feat feat={team} />
        <Feat feat={contact}>
          <div className="circle__wrapper">
            <div className="circle" />
          </div>
        </Feat>
      </div>
    </>
  );
}

export default Main;
