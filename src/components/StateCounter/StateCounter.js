import React, { Component } from 'react';
import Display from './Display';

export default class StateCounter extends Component {
  state = {
    count: 0
  }

  addOne = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <Display
        count={this.state.count}
        addOne={this.addOne}
      />
    )
  }
}
