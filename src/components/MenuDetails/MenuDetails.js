import React, { Component } from 'react';
import './MenuDetails.css';

export default class Shop extends Component {
  state = {
    open: false
  }

  toggleDisplay = () => {
    this.setState(state => ({open: !state.open}))
  }

  render() {
    const { food } = this.props;
    const { open } = this.state;
    return(
      <div className="menu-details">
        <button
          onClick={this.toggleDisplay}
        >
          {open ? '-' : '+'}
        </button>
        <span>
          {open ? food.details :  'Details' }
        </span>
      </div>
    )
  }
}
