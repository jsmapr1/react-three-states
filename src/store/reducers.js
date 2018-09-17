import { combineReducers } from 'redux'

function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.item
      ]
    default:
      return state
  }
}

function count(state = 0, action) {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    default:
      return state;
  }
}

export default combineReducers({
  cart,
  count,
})
