import React from 'react';
import { connect } from 'react-redux';
import Order from '../order';

const OrderList = props => (
  <div>
    <h2>Order List</h2>
    <ul>
      {props.orders.map(order => (
        <Order
          key={order._id}
          order={order}
        />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({ orders: state.orders });

export default connect(mapStateToProps)(OrderList);
