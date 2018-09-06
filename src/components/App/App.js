import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

import RegionProvider from '../RegionContext/RegionProvider';
import Header from '../Header/Header';
import Promotion from '../Promotion/Promotion';
import Shop from '../Shop/Shop';

class App extends Component {
  render() {
    return (
      <div>
        <RegionProvider>
          <Header />
          <Promotion />
          <Shop />
        </RegionProvider>
      </div>
    );
  }
}

export default App;
