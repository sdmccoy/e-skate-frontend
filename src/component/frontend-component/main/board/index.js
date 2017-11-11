import './_board.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import ItemModal from '../item-modal';

class BoardItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      showModal: false,
      placeHolder: {
        photoURI:  'https://s3-us-west-2.amazonaws.com/eskate/placeholder.gif',
        title: 'Out skating',
        price: 'loading soon...',
      },
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
    let placeHolder = this.state.placeHolder;
    let loading = [placeHolder, placeHolder, placeHolder, placeHolder];
    return (
      <div className='board-items-container' id='boards'>
        <div className='app-bar'>BOARDS</div>
        {util.renderEither(this.props.items.length < 1,
          loading.map((item, i) => {
            return <div className='card-item' key={i}>
              <div className='card-image-container'>
                <img className='card-image' src={item.photoURI} alt="" />
              </div>
              <div className='card-title-bar'>
                <h3 className='card-title'>{item.title}</h3>
                <h5 className='card-price'>{item.price}</h5>
              </div>
              <button className='card-view-button'
                onClick={() => this.handleItemModal()}>
                View Details
              </button>
            </div>;
          }),
          <div>
            {this.props.items.map(item => {
              return item.type === 'board' ?
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
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardItems);
