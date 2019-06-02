import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import uuid from 'uuid';
import CartItem from '../cart/CartItem';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';




class Checkout extends Component {

    state = {
        name : '',
        address : '',
        postCode : '',
        phoneNumber : 0,
        paymentOption : '',
        total : 0

    };



    buyItems() {
        const { cartItems } = this.props.cart;
       const total =  cartItems.reduce((acc, val) => acc + val.qty * val.price, 0).toFixed(2)
      
        fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization')
            },
            body: JSON.stringify({
                cartitems: JSON.stringify(cartItems),
                fullname: this.state.name,
                fulladdress: this.state.address,
                postcode: this.state.postCode,
                phone: this.state.phoneNumber,
                total : total,
                paymentoption: this.state.paymentOption
            })
        })
      .then(response => response.json())
      .then(response => {
             if(response.message !== "OK"){
              toast.error(response.message,{ 
                  autoClose: 1000,
                  position: toast.POSITION.TOP_CENTER });
          }else{
            toast.success("Bought successfuly!",{ 
                autoClose: 1000,
                position: toast.POSITION.TOP_CENTER });
              
          }
      })
        .catch(error => console.log(error))
    }
    handleNameChange(event) {

        this.setState({
            name : event.target.value
        })
    }

    handleAddressChange(event) {
        this.setState({
            address : event.target.value
        })
    }

    handlePostCodeChange(event){
        this.setState({
            postCode : event.target.value
        })
    }

    handlePhoneNumberChange(event){
        this.setState({
            phoneNumber : event.target.value
        })
    }

    setPayments(payment){
        this.setState({
            paymentOption : payment
        })
    }
    render() {




        const { cartItems } = this.props.cart;
        const totalPrice = cartItems.reduce((acc, val) => acc + val.qty * val.price, 0).toFixed(2)

        return (
            <div className="user-panel active">
                <div className="user-inside active">
                    <div className="container mt-3">
                        <div className="items active">

                            {cartItems.length === 0 ? (

                                <h3>
                                    Add some products to see details.
                                    </h3>
                            ) : (
                                    <React.Fragment>
                                        <h3>
                                            Your shopping cart:
                                    </h3>
                                        <Scrollbars style={{ height: '200px' }}>
                                            <ul>
                                                {cartItems.map(item => (
                                                    <li key={uuid()}>
                                                        <CartItem checkout="true" item={item} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </Scrollbars>
                                    </React.Fragment>)}
                        </div>

                        <div className={cartItems.length === 0 ? 'd-none' : 'total-amount'}>
                                <strong>Delivery</strong>
                                <article className="card-body mx-auto">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-address-book"></i> </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Full name"
                                            type="text"
                                            name="fullName"
                                            onChange={(event) => this.handleNameChange(event)} />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-address-book"></i> </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="City"
                                            type="text"
                                            onChange={(event) => this.handleAddressChange(event)} />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-map"></i> </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Post code"
                                            type="text"
                                            onChange={(event) => this.handlePostCodeChange(event)} />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Phone number"
                                            type="number"
                                            onChange={(event) => this.handlePhoneNumberChange(event)} />
                                    </div>



                                </article>

                          
                            <p>
                                <strong>Total</strong>
                                {totalPrice} zł
                            </p>
                            <div className="payments payments__methods"><p><strong>Payments:</strong></p>
                                <ul>
                                    <li onClick={() => this.setPayments("credit cards")}
                                    className={this.state.paymentOption === "credit cards"? 'li__selected' : ''}
                                    >
                                        <img src="https://www.reserved.com/media/SHARED/returns/cards.svg" alt="credit cards" /></li>
                                    <li 
                                    onClick={() => this.setPayments("PayU")}
                                    className={this.state.paymentOption === "PayU"? 'li__selected' : ''}
                                    ><img src="https://www.reserved.com/media/SHARED/returns/PAYU.svg" alt="PayU" /></li>
                                    <li onClick={() => this.setPayments("Blik")}
                                     className={this.state.paymentOption === "Blik"? 'li__selected' : ''}
                                    ><img src="https://www.reserved.com/media/SHARED/returns/blik.png" alt="Blik" /></li>
                                    <li onClick={() => this.setPayments("In Delivery")}
                                     className={this.state.paymentOption === "In Delivery"? 'li__selected' : ''}
                                    ><img src="https://www.reserved.com/pl/pl/skin/frontend/reserved2/default/img/svg/payment/cashondelivery.svg" alt="Płatność przy odbiorze" />
                                        <span>In delivery:</span></li>
                                    <li onClick={() => this.setPayments("PayPal")}
                                     className={this.state.paymentOption === "PayPal"? 'li__selected' : ''}
                                    ><img src="https://www.reserved.com/media/SHARED/returns/PayPal.svg" alt="PayPal" /></li>
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


const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Checkout);