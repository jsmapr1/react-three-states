import React from 'react';
import RegionContext from '../RegionContext/RegionContext';

import BuyMore from '../BuyMore/BuyMore';
import './Promotion.css';

export default function Promotion() {
  return(
    <RegionContext.Consumer>
      {({ region }) => {
        return (
        <section className="promotion green">
          <BuyMore />
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
