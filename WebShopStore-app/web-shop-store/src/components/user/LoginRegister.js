import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'
import LogIn from './UserLogin';
import UserRegister from './UserRegister';

class LoginRegister extends Component {


    showUserPanel = () => {
        const { showUserPanel } = this.props;
        showUserPanel();
    };

    setActivePanel = (activePanel) => {
        const { setActivePanel } = this.props;
        setActivePanel(activePanel);
    };


    render() {
        const { active } = this.props.user;


        return (
            <React.Fragment>
            <article className="card-body mx-auto">
                <div
                    onClick={() => this.setActivePanel('log in')}
                    className={`${active === 'log in' ? 'login-tab active' : 'login-tab'}`}
                >
                    <span>Register</span>
                </div>
                <div
                    onClick={() => this.setActivePanel('register')}
                    className={`${active === 'register' ? 'register-tab active' : 'register-tab'}`}
                >
                    <span>Log in</span>
                </div>
                <form className={`${active === 'log in' ? '' : 'd-none'} `}>
                    <UserRegister />
                </form>

                <form className={`${active === 'register' ? '' : 'd-none'} `}>
                    <LogIn />
                </form>
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
    { showUserPanel, setActivePanel }
)(LoginRegister);
