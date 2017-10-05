import React from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../../action/store-actions';
import * as util from '../../../lib/util';
import './_header.scss';
import CartModal from '../main/cart';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerLogo: 'https://s3-us-west-2.amazonaws.com/eskate/logo-400x400.png',
      itemName:'',
      itemCount: '',
      itemTotal: 0.00,
      showCart: false,
    };
    this.handleCartModal = this.handleCartModal.bind(this);
  }

  componentWillMount() {
    // this.props.storeSettingsFetch();
  }

  componentWillReceiveProps(props){
    let sumTotal = props.cart.reduce((prev, curr) => prev += curr.price, 0);
    this.setState({
      itemCount: props.cart.length,
      itemTotal: sumTotal,
    });
  }

  handleCartModal(){
    this.state.showCart ?
      this.setState({showCart: false})
      :
      this.setState({showCart: true});
  }

  render() {
    let {itemName, itemCount, itemTotal} = this.state;
    return (
      <div className='frontend-header'>
        <div className='logo-container'>
          <img
            className='store-logo'
            src={this.state.headerLogo}
          />
        </div>
        <h1 className='company-name'>E-Skate</h1>
        <div className='clear-float'></div>
        <div className='navigation'>
          <ul className='navigation-menu'>
            <li>
              <a href='#boards'>Boards</a>
            </li>
            <li>
              <a href='#parts'>Parts</a>
            </li>
          </ul>
        </div>
        <div className='cart-button'>
          <button type='button'
            onClick={this.handleCartModal}>
            <i className="fa fa-shopping-cart"></i> <span id="cart-total">
              {itemCount} item(s) - $ {itemTotal}</span></button>
        </div>
        {util.renderIf(this.state.showCart,
          <CartModal
            onComplete={this.handleCartModal}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  header: state.store,
  cart: state.cart,
});

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
