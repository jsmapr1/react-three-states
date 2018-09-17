import React from 'react';
import { connect } from 'react-redux'

import { add } from '../../store/actions';

export function ReduxCounter({ addOne, count }) {
  return(
    <div className="counter">
      <h3>Redux Counter</h3>
      Current Count: {count}
      <button onClick={addOne}> Add One! </button>
    </div>
  )
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = { addOne: add }

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
