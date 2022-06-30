import React from 'react';
import Hero from '../../components/Hero/Hero';
import Feat from '../Feat/Feat';
import { hi, offer, about, team, contact } from '../../constants/mainContent'
import { StaticImage } from 'gatsby-plugin-image';

const Main =()=> {
  return (
    <>
      <Hero />
      <Feat feat={hi}>
        {/* <StaticImage src={"../../images/intermediate.jpg"} alt=""/> */}
        {/* <StaticImage src={"../../images/team.jpg"} alt="" /> */}
      </Feat>
      <Feat feat={offer}>
        <StaticImage src={"../../images/2men.jpg"} alt="" />
      </Feat>
      <Feat feat={about}>
        <StaticImage src={"../../images/begginer.jpg"} alt=""/>
      </Feat>
      <Feat feat={team} />
      <Feat feat={contact} />
    </>
  );
}

export default Main;
