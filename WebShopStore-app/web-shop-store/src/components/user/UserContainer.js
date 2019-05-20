import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUserPanel } from '../../redux/actions/userPanelAction';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class UserContainer extends Component {
  showUserPanel = () => {
    const { showUserPanel } = this.props;
    showUserPanel();
  };

  render() {

    const UserPanel = styled.div`
  
    `;

    return (
      <div className="user-icon">
        <button type="button" onClick={this.showUserPanel}>
          <i className="fa fa-user" /> 
        </button>
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
