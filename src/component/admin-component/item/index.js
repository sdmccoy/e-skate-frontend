import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../../../action/item-actions';
import EditItem from '../edit-item-form';
import './_item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.collapseEditView = this.collapseEditView.bind(this);
  }

  handleEditClick() {
    this.setState({ expanded: true });
  }

  collapseEditView() {
    this.setState({ expanded: false });
  }

  render() {
    return (
      <li className="item-plus-form">
        <div className="item">
          <div className="image-container">
            <img src={this.props.item.photoURI} alt={this.props.item.description} />
          </div>
          <div className="info-container">
            <div className="image-info">
              <h2>{this.props.item.name}</h2>
              <h4>{`$${this.props.item.price}`}</h4>
            </div>
            <div className="button-container">
              <button onClick={this.handleEditClick}>Edit</button>
              <button onClick={() => this.props.deleteItem(this.props.item)}>Delete</button>
            </div>
          </div>
        </div>
        {this.state.expanded &&
          <EditItem
            item={this.props.item}
            collapse={this.collapseEditView}
          />
        }
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(itemActions.itemDeleteRequest(item)),
});

export default connect(null, mapDispatchToProps)(Item);
