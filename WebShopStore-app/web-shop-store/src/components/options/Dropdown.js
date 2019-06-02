import React, {Component} from 'react';
import { connect } from 'react-redux';
import {  toast } from 'react-toastify';
import { setToken, getToken} from './../../redux/actions/authAction';

class Dropdown extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       logged : false
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  this.logOut = this.logOut.bind(this);

};

componentDidMount() {
    const { setToken } = this.props;
    setToken(localStorage.getItem("authorization"))

    const token  = localStorage.getItem("authorization");
    if (token) {
        this.setState({
            logged: true
        });
    }
}

logOut() {
    const { setToken } = this.props;
    setToken(null);
    localStorage.removeItem("authorization");
    toast.success("Logged out!", {
        autoClose: 1000,
        position: toast.POSITION.TOP_CENTER
    });
    setTimeout(function () { window.location.reload(); }, 1500);
}

showDropdownMenu(event) {
    event.preventDefault();
    this.state.logged ? 
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    }) : window.location.href="/account";
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
         <button  onClick={this.showDropdownMenu}>  <i className="fa fa-user" /> </button>


          { this.state.displayMenu ? (
          <ul>
         <li><a href="/account">My orders</a></li>
         <li><a href="/settings">Password</a></li>
         <li onClick={this.logOut}>Log Out </li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

const mapStateToProps = state => ({
    userPanel: state.userPanel,
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { setToken, getToken }
  )(Dropdown);