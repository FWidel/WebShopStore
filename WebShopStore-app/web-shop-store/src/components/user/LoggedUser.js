import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel, setActivePanel } from './../../redux/actions/userPanelAction'
import { setToken } from './../../redux/actions/authAction';
import {toast} from 'react-toastify';

class LoggedUser extends Component {


    showUserPanel = () => {
        const { showUserPanel } = this.props;
        showUserPanel();
    };

    setActivePanel = (activePanel) => {
        const { setActivePanel } = this.props;
        setActivePanel(activePanel);
    };

    logOut(){
        const { setToken } = this.props;
        setToken(null);
        localStorage.removeItem("authorization");
        toast.success("Logged out!",{ 
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER });
        setTimeout(function(){window.location.reload()},3000);
    }


    render() {
        const { active } = this.props.user;


        return (
            <React.Fragment>
            <article className="card-body mx-auto">
           
                <div
                    onClick={() => this.setActivePanel('log in')}
                    className={`${active === 'log in' ? 'login-tab active' : 'login-tab'}`}
                >
                    <span>My orders</span>
                </div>
                <button className="btn-custom" onClick={(event) => this.logOut(event)} >Log out</button>
           
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
    { showUserPanel, setActivePanel, setToken }
)(LoggedUser);
