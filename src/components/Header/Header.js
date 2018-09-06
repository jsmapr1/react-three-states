import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeliveryEstimate from '../DeliveryEstimate/DeliveryEstimate';

import './header.css';

export default function Header({
  total=100
}) {
  return(
    <section className="header">
      <DeliveryEstimate />
      <div className="cart">
        <FontAwesomeIcon icon="shopping-cart" />
        Your total is {total}
      </div>
    </section>
  );
}
