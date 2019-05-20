import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'
import { setToken, getToken } from './../../redux/actions/authAction';
import LoginRegister from '../user/LoginRegister';
import LogedUser from '../user/LoggedUser';

class UserPanel extends Component {

    state = {
        logged: false
    };
    showUserPanel = () => {
        const { showUserPanel } = this.props;
        showUserPanel();
    };

    setActivePanel = (activePanel) => {
        const { setActivePanel } = this.props;
        setActivePanel(activePanel);
    };

    componentDidMount() {
        const { setToken } = this.props;
        setToken(localStorage.getItem("authorization"))

        const token  = localStorage.getItem("authorization");
        console.log("token",token);
        if (token) {
            this.setState({
                logged: true
            });
        }


    }

    render() {
        const { isOpen } = this.props.user;

        console.log(this.state.logged);
        return (
            <div className={`user-panel ${!isOpen ? 'transparent' : 'active'} `}>
                <div className={`user-inside ${isOpen ? 'active' : ''}`}>
                    <Scrollbars style={{ height: '65%' }}>
                        <div className="items">
                        </div>
                    </Scrollbars>
                    <div className="card">
                    {!this.state.logged&&(
                        <LoginRegister />
                    )}
                    {this.state.logged&&(
                        <LogedUser/>
                    )}
                </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth

});

export default connect(
    mapStateToProps,
    { showUserPanel, setActivePanel, setToken, getToken }
)(UserPanel);