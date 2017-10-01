//reducer is only from frontend state
//it cannot talk to the database

export default (state = [], action) => {
  let {type, payload} = action;
  switch (type) {

  case 'ITEM_ADD':
    return [...state, payload];

  case 'ITEM_REMOVE':
    return state.filter(item => item.cartNum !== payload.cartNum);

  default:
    return state;
  }
};
