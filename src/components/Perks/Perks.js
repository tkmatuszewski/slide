import React from 'react';
import { perks } from "../../constants/perks";
import './Perks.scss';

export default function OfferPerks() {
  return (
    <div className="perks">
      <ul className="perks__cnt">
        <h2 className="perks__title">Our perks</h2>
        {perks.map((el) => {
          return (
            <li className="perk__card" key={el.name}>
              <strong>{el.name}</strong>
              <p>{el.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
