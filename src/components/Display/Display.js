import React from 'react';

export default function Display({ addOne, count, title}) {
  return(
    <div className="counter">
      <h3>{title}</h3>
      Current Count: {count}
      <button onClick={addOne}> Add One! </button>
    </div>
  )
}
