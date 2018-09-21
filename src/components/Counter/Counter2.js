import React from 'react';
import StateCounter from '../StateCounter/StateCounter';
import ReduxCounter from '../ReduxCounter/ReduxCounter';
import CounterProvider from '../ContextCounter/CounterProvider';
import OtherComponent from '../ContextCounter/OtherComponent';
import './counter.css';

export default function Counter() {
  return(
    <div>
      <StateCounter />
      <StateCounter />
      <ReduxCounter />
      <ReduxCounter />
      <CounterProvider>
        <OtherComponent />
      </CounterProvider>
      <CounterProvider>
        <OtherComponent />
        <OtherComponent />
      </CounterProvider>
    </div>
  )
}
