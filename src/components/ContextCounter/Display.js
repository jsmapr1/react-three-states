import React from 'react';
import CounterContext from './CounterContext';

export default function Display() {
  return(
    <CounterContext.Consumer>
      {({ addOne, count}) => {
        return (
          <div className="counter">
            <h3>Context Counter</h3>
            Current Count: {count}
            <button onClick={addOne}> Add One! </button>
          </div>
        )
      }}
    </CounterContext.Consumer>
  )
}
