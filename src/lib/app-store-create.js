import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';

const appStoreCreate = () => createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreate;
