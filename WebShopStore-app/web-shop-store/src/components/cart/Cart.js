import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from './../../redux/actions/cartAction'
import CartItem from './CartItem';
import TotalAmount from './TotalAmount';
import uuid from 'uuid';

class Cart extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  componentDidMount(){

  }

  render() {
    const { isOpen, cartItems } = this.props.cart;
    console.log(this.props);
    return (
      <div className={`cart ${!isOpen ? 'transparent' : ''}`}>
        <div className={`cart-inside ${isOpen ? 'active' : ''}`}>
          <h2>Shopping cart</h2>
          <button type="button" className="close" onClick={this.showCart}>
            &#xd7;
          </button>
          <Scrollbars style={{ height: '65%' }}>
            <div className="items">
              {cartItems.length === 0 ? (
           
                <h3>
                  Add some products to see details.
                </h3>
              ) : (
                <ul>
                  {cartItems.map(item => (
                    <li key={uuid()}>
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Scrollbars>
          <TotalAmount />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { showCart, addItem }
)(Cart);
