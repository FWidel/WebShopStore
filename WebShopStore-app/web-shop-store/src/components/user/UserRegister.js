import React, { Component, Fragment } from 'react';
import {  toast } from 'react-toastify';


class UserRegister extends Component {

    state = {
        login: "",
        password: "",
        message : "",
        open : false
    };



    register(event) {
        
        event.preventDefault();
        fetch('https://webshopstore.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password
            })
        })
      .then(response => response.json())
      .then(response => {
             if(response.message !== "OK"){
              toast.error(response.message,{ 
                  autoClose: 1000,
                  position: toast.POSITION.TOP_CENTER });
          }else{
            toast.success("Registered successfuly!",{ 
                autoClose: 1000,
                position: toast.POSITION.TOP_CENTER });
                this.setState({
                    password: "",
                    login: ""
                });
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
                    <input name=""
                        className="form-control"
                        placeholder="Email address"
                        type="email"
                        value={this.state.login}
                        onChange={(event) => this.handleEmailChange(event)} />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control"
                        placeholder="Create password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.handlePasswordChange(event)} />
                </div>



                <div className="form-group">
                    <p className="personalData">Your personal data will be used to support your experience throughout
                                         this website, to manage access to your account, and for other purposes described in our
                                         <a href="/WebShopStore/policy" target="_blank">privacy policy</a>.</p>
                    <button type="submit" className="btn-custom btn-block" onClick={(event) => this.register(event)}> Create Account  </button>
                </div>
            </Fragment>
        );
    }
}

export default UserRegister;