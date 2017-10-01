import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create';
import AdminDashboard from '../admin-component/admin-dashboard';
import Storeview from '../frontend-component';
import '../../style/_main.scss';

const store = appStoreCreate();

const App = () => (
  <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/" component={Storeview} />
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
