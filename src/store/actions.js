export function addToCart(item){
  return ({
    type: 'ADD_TO_CART',
    item
  })
}

export function add() {
  return ({
    type: 'ADD_ONE',
  })
}
