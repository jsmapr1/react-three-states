import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions';
import './shop.css';
import menu from './menu';
import MenuDetails from '../MenuDetails/MenuDetails';

export class Shop extends Component {
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
    const { handleAdd } = this.props;
    return(
      <article>
        <section className="shop">
          <h1>Merchandise</h1>
          <ul>
            {this.state.menu.map(food => (
              <li key={food.id}>
                <div>
                  <span className="icon">{food.icon}</span>  {food.name}
                </div>
                <MenuDetails food={food} />
                <button onClick={() => handleAdd(food)}>Add To Cart</button>
              </li>
            ))}
          </ul>
        </section>
      </article>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: food => dispatch(addToCart(food))
  }
}

export default connect(null, mapDispatchToProps)(Shop);
