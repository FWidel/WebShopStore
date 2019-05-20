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
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
      });
    } else {

      showCart();
      this.setState({
        checkout: true
      });
    }

  }

  close = () => {

  }

  closeCheckout = () => {
    this.setState({
      checkout: false
    });
  }
	
buyItems= () => {
    this.setState({
      checkout: false
    });
  toast.success("Items bought successfuly, check your email.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER;
      });
  }

  componentDidMount() {

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
                <button type="button" className="btn-custom" onClick={() => this.goToCheckOut()}>
                  Go to checkout
          </button>
              </div>
            </div>
          </div>
        </div>


        <div className={`user-panel ${!this.state.checkout ? 'transparent' : 'active'} `}>
          <div className={`user-inside ${this.state.checkout ? 'active' : ''}`}>
            <div className="container mt-3">
              <h2>Shopping cart</h2>
              <button type="button" className="close" onClick={() => this.closeCheckout()}>
                X
          </button>
              <Scrollbars style={{ height: '65%' }}>
                <div className="items">
                  {console.log(cartItems)}
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
                <div className="sc-dqBHgY lfgGgn"><p>Payments:</p>
                  <ul>
                    <li><img src="https://www.reserved.com/media/SHARED/returns/cards.svg" alt="credit cards" /></li>
                    <li><img src="https://www.reserved.com/media/SHARED/returns/PAYU.svg" alt="PayU" /></li>
                    <li><img src="https://www.reserved.com/media/SHARED/returns/blik.png" alt="Blik" /></li>
                    <li><img src="https://www.reserved.com/pl/pl/skin/frontend/reserved2/default/img/svg/payment/cashondelivery.svg" alt="Płatność przy odbiorze" />
                      <span>In delivery:</span></li>
                    <li><img src="https://www.reserved.com/media/SHARED/returns/PayPal.svg" alt="PayPal" /></li>
                  </ul>
                </div>
                <div className="text-center">
                  <button type="button" className="btn-custom" onClick={() => this.buyItems()}>
                    Buy now
          </button>
                </div>
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
