import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'

class UserPanel extends Component {
    showUserPanel = () => {
        const { showUserPanel } = this.props;
        showUserPanel();
    };

    setActivePanel = (activePanel) => {
        const { setActivePanel } = this.props;
        setActivePanel(activePanel);
    };

    componentDidMount() {

    }

    render() {
        const { isOpen } = this.props.user;
        const { active } = this.props.user;
        console.log(active);


        return (
            <div className={`user-panel ${!isOpen ? 'transparent' : 'active'} `}>
                <div className={`user-inside ${isOpen ? 'active' : ''}`}>
                    <Scrollbars style={{ height: '65%' }}>
                        <div className="items">
                        </div>
                    </Scrollbars>
                    <div className="card">

                        <article className="card-body mx-auto">
                            <div 
                             onClick={() => this.setActivePanel('log in')}
                             className={`${active == 'log in' ? 'login-tab active' : 'login-tab'}`}
                             >
                                <span>Log In</span>
                            </div>
                            <div 
                             onClick={() => this.setActivePanel('register')}
                             className={`${active == 'register' ? 'register-tab active' : 'register-tab'}`}
                             >
                                <span>Register</span>
                            </div>
                            <form className={`${active == 'log in' ? '' : 'd-none'} `}>
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
                                         this website, to manage access to your account, and for other purposes described in ou
                                     r <a href="#"
                                            target="_blank">privacy policy</a>.</p>
                                    <button type="submit" className="btn-custom btn-block"> Create Account  </button>
                                </div>
                            </form>

                            <form className={`${active == 'register' ? '' : 'd-none'} `}>
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
                            </form>
                        </article>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { showUserPanel, setActivePanel }
)(UserPanel);
