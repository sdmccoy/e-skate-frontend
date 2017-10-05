import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';

const AdminNav = props => (
  <div className='navigation'>
    <ul className='navigation-menu'>
      <li onClick={() => props.changeView('orders')}>Orders</li>
      <li onClick={() => props.changeView('items')}>Items</li>
      <li onClick={() => props.changeView('storeSettings')}>StoreSettings</li>
      <li onClick={props.userLogout}>Logout</li>
    </ul>
  </div>
);

export default AdminNav;
