import React from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeliveryEstimate from '../DeliveryEstimate/DeliveryEstimate';

import './header.css';

export function Header({
  cart,
}) {
  const total = cart.reduce((total, item) => total + item.price, 0);
  return(
    <section className="header">
      <DeliveryEstimate />
      <div className="cart">
        {cart.length <= 0 && 
          <FontAwesomeIcon icon="shopping-cart" />
        }
        {cart.length > 0 && 
          <FontAwesomeIcon icon="cart-plus" />
        }
        {total > 0 &&
          <span>
            Your total is ${total}
          </span>
        }
      </div>
    </section>
  );
}

function mapStateToProps({ cart }) {
  return ({
    cart
  })
}

export default connect(mapStateToProps)(Header);
