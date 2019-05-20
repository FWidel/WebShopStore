import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel } from '../../redux/actions/userPanelAction';

class UserAccount extends Component {
  showUserPanel = () => {
    const { showUserPanel } = this.props;
    showUserPanel();
  };

  render() {


    return (
      <div className="user-icon">
        <button type="button" onClick={this.showUserPanel}>
          <i className="fa fa-user" /> 
        </button>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  userPanel: state.userPanel
});

export default connect(
  mapStateToProps,
  { showUserPanel }
)(UserAccount);
