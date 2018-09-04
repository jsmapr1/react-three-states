import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

import Header from '../Header/Header';
import Promotion from '../Promotion/Promotion';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Promotion />
        <article>
          <section>
            <h1>Merchandise</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </section>
        </article>
      </div>
    );
  }
}

export default App;
