import React, { Component } from 'react';
import CounterContext from './CounterContext';
import OtherComponent from './OtherComponent';

export default class ContextProvider extends Component {
  state = {
    count: 0,
    addOne: () => {
      this.setState(state => ({count: state.count + 1}))
    }
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <OtherComponent />
      </CounterContext.Provider>
    )
  }
}