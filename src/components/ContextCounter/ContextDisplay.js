import React from 'react';
import CounterContext from './CounterContext';
import Display from '../Display/Display'

export default function ContextDisplay() {
  return(
    <CounterContext.Consumer>
      {({ addOne, count}) => {
        return (
          <Display
            addOne={addOne}
            count={count}
            title="Context Counter"
          />
        )
      }}
    </CounterContext.Consumer>
  )
}
