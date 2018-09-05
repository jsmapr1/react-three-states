import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

import Header from '../Header/Header';
import Promotion from '../Promotion/Promotion';
import Shop from '../Shop/Shop';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Promotion />
        <Shop />
      </div>
    );
  }
}

export default App;
