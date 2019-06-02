import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'
import { setToken } from './../../redux/actions/authAction';
import uuid from 'uuid';


class LoggedUser extends Component {
    state = {
        orders: []

    };
    getOrders() {

        fetch('http://localhost:8080/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization')
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    orders: response
                });
            })
            .catch(error => console.log(error))
    }

    redirectToShop() {
        window.location.href = "/";
    }

    componentDidMount() {
        this.getOrders();
    }

    render() {

        return (
            <React.Fragment>
                <article className="card-body mx-auto">

                    {this.state.orders.length === 0 ? (
                        <div className="mx-auto">
                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            <span className="empty">You have not placed any orders</span>
                        </div>
                    ) : (
                            <React.Fragment>
                                <span className="empty">Your orders</span>
                                <table className="table table-striped table-responsive-md btn-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Full Name</th>
                                            <th>Phone</th>
                                            <th>Full address</th>
                                            <th>Total amount</th>
                                            <th>Payment method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.orders.map(order =>
                                        <tr key={uuid()}>
                                            <td>{order.id} </td>
                                            <td>{order.fullname} </td>
                                            <td>{order.phone} </td>
                                            <td>{order.fulladdress} </td>
                                            <td>{order.total} </td>
                                            <td>{order.paymentoption} </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </React.Fragment>
                        )}

                    <button className="btn-custom" onClick={() => this.redirectToShop()} >Shop now!</button>

                </article>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,

});

export default connect(
    mapStateToProps,
    { showUserPanel, setActivePanel, setToken }
)(LoggedUser);
