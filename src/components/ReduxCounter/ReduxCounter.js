import React from 'react';
import { connect } from 'react-redux'

import { add } from '../../store/actions';
import Display from '../Display/Display';

export function ReduxCounter({ addOne, count }) {
  return(
    <Display
      addOne={addOne}
      count={count}
      title="Redux Counter"
    />
  )
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = { addOne: add }

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
