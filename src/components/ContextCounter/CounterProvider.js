import React, { Component } from 'react';
import CounterContext from './CounterContext';

export default class ContextProvider extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({count: state.count + 1}))
  }
  render() {
    const { count } = this.state;

    const value = {
      addOne: this.addOne,
      count,
    };

    return (
      <CounterContext.Provider value={value}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}
