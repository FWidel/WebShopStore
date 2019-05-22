import { Component } from 'react-dom';

class Checkout extends Component {
    render() {
        let { cartItems } = this.props;
        console.log(cartItems);
        return (
            <div className="user-panel active">
                <div className="user-inside active">
                    <div className="container mt-3">
                        <h2>Shopping cart</h2>
                        <button type="button" className="close">
                            X
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
        )
    }
}

export default Checkout;