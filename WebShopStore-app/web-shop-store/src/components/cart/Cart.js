import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from './../../redux/actions/cartAction'
import CartItem from './CartItem';
import uuid from 'uuid';
import { toast } from 'react-toastify';

class Cart extends Component {

  state = {
    checkout: false
  };
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  goToCheckOut = () => {

    const { showCart } = this.props;
    const token = localStorage.getItem("authorization");

    if (!token) {
      toast.warn("Log in first!", {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT
      });
    } else {

      showCart();
      this.setState({
        checkout: true
      });
    }

  }

  closeCheckout = () => {
    this.setState({
      checkout: false
    });
  }




	
  render() {
    const { isOpen, cartItems } = this.props.cart;
    const { totalPrice } = this.props.cart;

    return (
      <React.Fragment>
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
            <div className="total-amount">
              <p>
                <strong>Delivery</strong>
                <span>E-mail</span>
              </p>
              <p>
                <strong>Total</strong>
                {totalPrice} zł
        </p>
              <div className="text-center">
                <a className="btn-custom" href="/checkout" >
                  Go to checkout
          </a>
              </div>
            </div>
          </div>
        </div>


    

      </React.Fragment>
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
