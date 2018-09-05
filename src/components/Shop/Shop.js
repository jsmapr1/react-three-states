import React, { Component } from 'react';
import './shop.css';
import menu from './menu';

export default class Shop extends Component {
  state = {
    menu: []
  }

  componentDidMount() {
    // Fake API
    setTimeout(() => {
      this.setState({
        menu
      })
    }, 1000)
  }

  render() {
    return(
      <article>
        <section className="shop">
          <h1>Merchandise</h1>
          <ul>
            {this.state.menu.map(food => (
              <li key={food.id}><span className="icon">{food.icon}</span>  {food.name}</li>
            ))}
          </ul>
        </section>
      </article>
    )
  }
}
