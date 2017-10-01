import { combineReducers } from 'redux';
import user from './user';
import items from './item-reducer';
import orders from './order';
import store from './store';
import cart from './cart';

export default combineReducers({ user, store, items, orders, cart });
