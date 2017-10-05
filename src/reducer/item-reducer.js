export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ITEM_SET':
    return payload;
  case 'ITEM_CREATE':
    return [...state, payload];
  case 'ITEM_UPDATE':
    return state.map(item => item._id === payload._id ? payload : item);
  case 'ITEM_DESTROY':
    return state.filter(item => item._id !== payload._id);
  default: return state;
  }
};
