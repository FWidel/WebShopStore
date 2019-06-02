import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, addItem, decrement } from './../../redux/actions/cartAction';

class CartItem extends Component {
  onClick = id => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  increment = () => {
    const { addItem } = this.props;
    addItem(this.props.item);
  };

  decrement = id => {
    const { item } = this.props;
    if (item.qty > 1) {
      const { decrement } = this.props;
      decrement(this.props.item);
    } else {
      const { deleteItem } = this.props;
      deleteItem(id);
    }
  };

  render() {
    const { item } = this.props;
    const { checkout} = this.props;

    return (
      <React.Fragment>
        <div className="img-wrapper">
          <img className="img-fluid" src={item.picture} alt={item.name} />
        </div>
        <h4 className="name">{item.name}</h4>
        <div className="quantity">
          <p>
            Quantity:{' '}
            <button
              className={checkout === "true" ? "d-none" :"btn subtract"}
              onClick={this.decrement.bind(this, item.id)}
            >
              -
            </button>
            {item.qty}
            <button 
            className={checkout === "true" ? "d-none" :"btn add"}
             onClick={this.increment.bind(this)}>
              +
            </button>
          </p>
        </div>
        <small className="price">{(item.price * item.qty)} zł</small>
        <button
          type="button"
          className={checkout === "true" ? "d-none" :"close"}
          onClick={this.onClick.bind(this, item.id)}
        >x
        </button>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteItem, addItem, decrement }
)(CartItem);
