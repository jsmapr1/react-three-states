import React from 'react';

export default function Display({ addOne, count }) {
  return(
    <div className="counter">
      <h3>Local Counter</h3>
      Current Count: {count}
      <button onClick={addOne}> Add One! </button>
    </div>
  )
}
