import React from 'react';
import RegionContext from '../RegionContext/RegionContext';

export default function DeliveryEstimate() {
  return(
    <RegionContext.Consumer>
      {({ region }) => {
        if(!region.deliveryTime) {
          return null
        }
        return (
          <div> Estimated Delivery: { region.deliveryTime } minutes</div>
        )
      }
      }
    </RegionContext.Consumer>
  );
}
