import React, { Component, Fragment } from 'react';


class LogIn extends Component{

    render(){
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
                                    <input className="form-control" placeholder="Password" type="password" />
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn-custom btn-block">Log in</button>
                                </div>
        </Fragment>
        );
    }
}

export default LogIn;