import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { setToken } from './../../redux/actions/authAction';
import { connect } from 'react-redux';
import LoginRegister from './LoginRegister';


class Settings extends Component {

    state = {
        logged: false,
        oldPassword: '',
        newPassword: ''

    };

    componentDidMount() {
        const { setToken } = this.props;
        setToken(localStorage.getItem("authorization"))

        const token = localStorage.getItem("authorization");
        console.log("token", token);
        if (token) {
            this.setState({
                logged: true
            });
        }
    }



    changePassword(event) {
        event.preventDefault();
        fetch('http://localhost:8080/change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("authorization")
            },
            body: JSON.stringify({

                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
            })
        })
            .then(response => response.json())
            .then(response => {

                if (response.message === "Bad credentials!" || response.message === "Password too short!") {
                    console.log(response);
                    toast.error(response.message, {
                        autoClose: 1000,
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    toast.success("Password changed successfuly!", {
                        autoClose: 1000,
                        position: toast.POSITION.TOP_CENTER
                    });

                    setTimeout(function () { window.location.reload() }, 1000);
                }
            })
            .catch(error => console.log(error))
    }

    handleOldPasswordChange(event) {
        this.setState({
            oldPassword: event.target.value
        });
    }

    handleNewPasswordChange(event) {
        this.setState({
            newPassword: event.target.value
        });
    }

    render() {
        return (
            <div className="user-panel active">
                <div className="user-inside active">
                    <div className="card">
                        {!this.state.logged && (
                            <LoginRegister />
                        )}
                        {this.state.logged && (
                            <article className="card-body mx-auto">

     
                                    <b><span>In order to change password fill in this form:</span></b>
            
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        placeholder="Old password"
                                        type="password"
                                        onChange={(event) => this.handleOldPasswordChange(event)} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        placeholder="New password"
                                        type="password"
                                        onChange={(event) => this.handleNewPasswordChange(event)} />
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn-custom btn-block" onClick={(event) => this.changePassword(event)} >Change</button>
                                </div>

                            </article>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth

});

export default connect(
    mapStateToProps,
    { setToken }
)(Settings);