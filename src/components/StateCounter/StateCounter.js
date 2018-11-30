import React, { Component } from 'react';
import Display from '../Display/Display';

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
        addOne={this.addOne}
        count={this.state.count}
        title="Local Counter"
      />
    )
  }
}
