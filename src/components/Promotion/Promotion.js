import React from 'react';
import RegionContext from '../RegionContext/RegionContext';

import './Promotion.css';

export default function Promotion() {
  return(
    <RegionContext.Consumer>
      {({ region }) => {
        return (
        <section className="promotion green">
          <div>Buy 3 get 1 free!</div>
          {region.specials && region.specials.map(special => (
            <div key={special.id}>{special.text}</div>
          ))}
        </section>
        )
      }
      }
    </RegionContext.Consumer>
  );
}
