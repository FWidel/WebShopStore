import React, { Component } from 'react';
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

        return (
            <div className="user-panel active">
                <div className="user-inside active">
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
