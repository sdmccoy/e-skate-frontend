import './_part.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import ItemModal from '../item-modal';
import AppBar from 'material-ui/AppBar';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
    let dollar = '$';
    return (
      <div className='part-items-container' id='parts'>
        <AppBar className='app-bar'
          title="E - PARTS"
        />
        {this.props.items.map(item => {
          return item.type === 'part' ?
            <Card className='card-item' key={item._id}>

              <CardMedia className='card-header'>
                <img className='card-image' src={item.photoURI} alt="" />
              </CardMedia>
              <CardTitle className='card-title-bar' title={item.name}         subtitle={dollar + item.price} style={{backgroundColor: '#e3e5e8', margin: '0px'}}/>
              <RaisedButton className='card-view-button' label="View Item"
                onClick={() => this.handleItemModal(item)}
                style={{margin: '0px 0px 10px 0px'}}
              />

            </Card>
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
