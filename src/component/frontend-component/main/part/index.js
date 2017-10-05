import './_part.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import ItemModal from '../item-modal';

class PartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      showModal: false,
    };
    this.handleItemModal = this.handleItemModal.bind(this);
  }

  handleItemModal(item){
    this.state.showModal ?
      this.setState({item: '', showModal: false})
      :
      this.setState({item: item, showModal: true});
  }

  render() {
    return (
      <div className='part-items-container' id='parts'>
        <div className='app-bar'>PARTS</div>
        {this.props.items.map(item => {
          return item.type === 'part' ?
            <div className='card-item' key={item._id}>
              <div className='card-image-container'>
                <img className='card-image' src={item.photoURI} alt="" />
              </div>
              <div className='card-title-bar'>
                <h3 className='card-title'>{item.name}</h3>
                <h5 className='card-price'>${item.price}</h5>
              </div>
              <button className='card-view-button'
                onClick={() => this.handleItemModal(item)}>
                View Details
              </button>

            </div>
            :
            undefined;
        })}
        {util.renderIf(this.state.showModal,
          <ItemModal
            item={this.state.item}
            onComplete={this.handleItemModal}
          />
        )}
        <div className='clear-float'></div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  items: state.items,
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PartItems);
