import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import CartContainer from '../cart/CartContainer';
import UserContainer from '../user/UserContainer';

class Navbar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { isTop } = this.state;
    return (
      <nav className={`navbar fixed-top ${!isTop ? 'scrolled' : ''}`}>
        <div className="container">
          <button
            type="button"
            onClick={this.scrollToTop}
            className="btn btn-link navbar-brand">
           Themes shop
          </button>
          <CartContainer />
          <UserContainer />
        </div>
      </nav>
    );
  }
}

export default Navbar;
