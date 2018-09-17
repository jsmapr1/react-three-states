import React from 'react';
const CounterContext = React.createContext({
  counter: 0,
  addOne: () => {}
});

export default CounterContext;
