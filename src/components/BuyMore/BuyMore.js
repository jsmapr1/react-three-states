import React from 'react';
import { connect } from 'react-redux'

function Promotion({ cart }) {
  if(cart.length > 2) {
    return(<div> 🎉 You have earned a free item! 🎉</div>);
  }
  if(cart.length === 0) {
    return(
      <div>Buy 3 get 1 free!</div>
    );
  }
  return (<div>🤗 Buy {3 - cart.length} more and get 1 free! 🤗 </div>);
}

function mapStateToProps({ cart }) {
  return({
    cart
  })
}

export default connect(mapStateToProps)(Promotion);
