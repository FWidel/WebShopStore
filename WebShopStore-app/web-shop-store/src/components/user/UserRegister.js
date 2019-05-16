import React, { Component, Fragment } from 'react';


class UserRegister extends Component {

    render() {
        return (
            <Fragment>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input name="" className="form-control" placeholder="Email address" type="email" />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Create password" type="password" />
                </div>



                <div className="form-group">
                    <p className="personalData">Your personal data will be used to support your experience throughout
                                         this website, to manage access to your account, and for other purposes described in our                                    r <a href="#"
                            target="_blank">privacy policy</a>.</p>
                    <button type="submit" className="btn-custom btn-block"> Create Account  </button>
                </div>
            </Fragment>
        );
    }
}

export default UserRegister;