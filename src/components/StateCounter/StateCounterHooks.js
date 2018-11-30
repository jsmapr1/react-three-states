import React, { useState } from 'react';
import Display from '../Display/Display';

export default function StateCounterHooks() {
  const [count, add] = useState(0);
  const addOne = () => add(count + 1);
  return (
    <Display
      addOne={addOne}
      count={count}
      title="Local Counter"
    />
  )
}
