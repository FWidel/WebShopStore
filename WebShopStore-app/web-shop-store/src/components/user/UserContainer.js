import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel } from '../../redux/actions/userPanelAction';
import PropTypes from 'prop-types';
import Dropdown from './../options/Dropdown';

class UserContainer extends Component {
  showUserPanel = () => {
    const { showUserPanel } = this.props;
    showUserPanel();
  };



  render() {
    return (
      <div className="user-icon">
        <Dropdown></Dropdown>
       
      </div>
    );
  }
}

UserContainer.propTypes = {
  showUserPanel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userPanel: state.userPanel
});

export default connect(
  mapStateToProps,
  { showUserPanel }
)(UserContainer);
