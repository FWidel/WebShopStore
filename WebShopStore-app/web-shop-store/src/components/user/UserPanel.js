import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'
import LogIn from './UserLogin';
import UserRegister from './UserRegister';

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
                                <span>Register</span>
                            </div>
                            <div
                                onClick={() => this.setActivePanel('register')}
                                className={`${active == 'register' ? 'register-tab active' : 'register-tab'}`}
                            >
                                <span>Log in</span>
                            </div>
                            <form className={`${active == 'log in' ? '' : 'd-none'} `}>
                                <UserRegister />
                            </form>

                            <form className={`${active == 'register' ? '' : 'd-none'} `}>
                                <LogIn />
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
