import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { setToken } from './../../redux/actions/authAction';
import { connect } from 'react-redux';


class LogIn extends Component {

    state = {
        login: "",
        password: "",
        message: "",
    };



    login(event) {
        event.preventDefault();
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
                id: 0
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.message === "Bad credentials!") {
                    toast.error(response.message, {
                        autoClose: 1000,
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    toast.success("Logged in successfuly!", {
                        autoClose: 1000,
                        position: toast.POSITION.TOP_CENTER
                    });

                    var { setToken } = this.props;
                    setToken(response.message);
                    setTimeout(function () { window.location.reload() }, 1500);
                }
            })
            .catch(error => console.log(error))
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            login: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="email"
                        className="form-control"
                        placeholder="Email address"
                        type="email"
                        onChange={(event) => this.handleEmailChange(event)} />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        onChange={(event) => this.handlePasswordChange(event)} />
                </div>


                <div className="form-group">
                    <button type="submit" className="btn-custom btn-block" onClick={(event) => this.login(event)} >Log in</button>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth

});

export default connect(
    mapStateToProps,
    { setToken }
)(LogIn);