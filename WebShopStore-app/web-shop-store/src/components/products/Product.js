import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartAction';
import {toast}  from 'react-toastify';


class Product extends Component {
 
  addItem = product => {
    toast.info("Item added successfuly!",{ 
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER });
    const { addItem } = this.props;
    addItem(product);
  };

;

  render() {
    const { product } = this.props;
    
        return (
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src={product.picture}
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="price">{product.price} zł</p>
            <ul className="sizes">
            <li>Resolutions:</li>
            {product.size}
            </ul>
            <div className="text-center">
              <button
                className="btn-custom"
                onClick={this.addItem.bind(this, product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(Product);
