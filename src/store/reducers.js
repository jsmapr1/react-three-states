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

export default combineReducers({
  cart,
})
