import React from 'react';
import { connect } from 'react-redux';
import AdminNav from '../admin-nav';
import './_admin-header.scss';

const AdminHead = props => (
  <div>
    <img className='store-logo' src={props.header.storeLogoURI} alt="logo" />
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
