import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Counter from '../Counter/Counter';
import Pizza from '../Pizza/Pizza';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/" component={Pizza}/>
      </div>
    </Router>
    );
  }
}

export default App;
