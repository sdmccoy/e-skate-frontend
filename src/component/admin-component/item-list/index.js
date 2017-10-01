import React from 'react';
import { connect } from 'react-redux';
import Item from '../item';
import CreateItemForm from '../create-item-form';
import './_item-list.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'list' };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({ view: this.state.view === 'list' ? 'form' : 'list' });
  }

  render() {
    return (
      <div className="item-list">
        <button className="item-add-button" onClick={this.toggleView}>Add New Item</button>
        {this.state.view === 'list' ? (
          <ul>
            {this.props.items.map(item => (
              <Item
                key={item._id}
                item={item}
              />
            ))}
          </ul>
        ) : (
          <CreateItemForm toggleView={this.toggleView} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps)(ItemList);
