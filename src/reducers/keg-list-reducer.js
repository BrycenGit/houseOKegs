import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
  const { name, brand, flavor, price, quantity, id } = action;

  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          quantity: quantity,
          id: id,
        }
      });
    default:
      return state;
  }
};