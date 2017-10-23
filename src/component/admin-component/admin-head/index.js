import React from 'react';
import { connect } from 'react-redux';
import AdminNav from '../admin-nav';
import './_admin-header.scss';

const AdminHead = props => (
  <div>
    <img className='store-logo-admin' src={'https://s3-us-west-2.amazonaws.com/eskate/logo-400x400.png'} alt="logo" />
    {props.user &&
      <AdminNav
        changeView={props.changeView}
        userLogout={props.userLogout}
      />
    }
  </div>
);

const mapStateToProps = state => ({ user: state.user, header: state.store });

export default connect(mapStateToProps)(AdminHead);
