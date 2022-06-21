import React from 'react';
import Hero from '../../components/Hero/Hero';
import Feat from '../Feat/Feat';
import {sectionsContent} from '../../constants/mainContent'



const Main =()=> {
  return (
    <>
        <Hero />
        {sectionsContent.map(el => {
            return (
                <Feat feat={el} key={el.name}>
                    <img />
                </Feat>
              )
          }
        )
    }
    </>
  );
}

export default Main;
