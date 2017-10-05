import React from 'react';
import { connect } from 'react-redux';
import BoardItems from './main/board';
import PartItems from './main/part';
import Hero from './main/hero';
import * as itemAction from '../../action/item-actions';
import Header from './header';
import Footer from './footer';

class MainView extends React.Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <Header />
        <main className='frontend-main'>
          <Hero />
          <BoardItems />
          <PartItems />
        </main>
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(itemAction.itemsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
