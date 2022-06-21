import React from 'react';
import surfer from '../../images/surfer.jpg';
import { programs } from '../../constants/programs';
import Perks from '../Perks/Perks';
import { Program } from '../Program/Program';

const ProgramList =()=> {

  return (
    <div className="offer">
      <img src={surfer} alt={"Surfer riding a wave"} />
      <div className="offer__cnt">
        <div className="offer__hero">
          <span>More.</span>
          <ul>
            <li>adrenaline</li>
            <li>fitness</li>
            <li>water</li>
            <li>style</li>
            <li>fun</li>
          </ul>
        </div>
      </div>
    <Perks/>
      <div className='offer__slogan'>
          <h2>Sign up for our program and be a part of bigger picture.</h2>
      </div>
      <div className='offer__programs__cnt'>
          <div className='offer__programs'>
          {programs.map((program) => {
              return (
                <Program id={program} key={program.id}/>
              )
              })
            } 
          </div>
        </div>
    </div>
  );
}

export default ProgramList;