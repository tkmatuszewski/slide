import React, {lazy, useState} from 'react';
import { programs } from '../../constants/programs';
import Perks from '../Perks/Perks';
import { Program } from '../Program/Program';
import { StaticImage } from 'gatsby-plugin-image';
import './ProgramList.scss';

const ProgramList =()=> {

  const [selected, setSelected] = useState("Beginer")

  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value)
  }

  return (
    <div className="offer">
      <div className="offer__wrapper">
        <StaticImage
          src={"../../images/surfer.jpg"}
          alt={"Surfer riding a wave"}
        />
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
      <Perks />
      <div className="offer__slogan">
        <h2>We will take you from zero to hero.</h2>
        <p>
          You can walk and you can swim right? So now we'll teach you how to
          surf. It's entertaining, positive and versetile activity. Even the
          smallest adepts playing with the board have loads of fun.
        </p>
      </div>
      <div className="offer__programs__cnt">
        <div className="offer__left">
          <div className="offer__level">
            <strong>Level</strong>
            <button
              value="Beginer"
              onClick={(e) => {
                handleChange(e);
              }}
            >
              Beginer
            </button>
            <button
              value="Intermediate"
              onClick={(e) => {
                handleChange(e);
              }}
            >
              Intermediate
            </button>
            <button
              value="Expert"
              onClick={(e) => {
                handleChange(e);
              }}
            >
              Expert
            </button>
          </div>
          <label className="offer__slct">
            Your experiance
            <select onChange={(e) => handleChange(e)}>
              <option value="Beginer">beginer</option>
              <option value="Intermediate">intermediate</option>
              <option value="Expert">expert</option>
            </select>
          </label>
        </div>
        <div className="offer__right">
          {programs.map((program) => {
            if (program.level === selected) {
              return <Program id={program} key={program.id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgramList;