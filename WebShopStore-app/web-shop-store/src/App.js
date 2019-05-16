import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { Link } from 'react-scroll';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/page/Navbar';
import Footer from './components/page/Footer';
import Cart from './components/cart/Cart';
import Dashboard from './components/page/Dashboard';
import UserPanel from './components/user/UserPanel';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <Navbar />
              <div className="container hero">
                <h1>Welcome to our shop store!</h1>
                <h2>Check our products!</h2>
                <Link
                  to="products"
                  className="btn-main"
                  smooth={true}
                  offset={-10}
                  duration={1200}
                  spy={true}
                  onSetActive={this.handleSetActive}
                >
                  Products
                  <i className="fas fa-chevron-down" />
                </Link>
              </div>
            </header>
            <section name="products" className="products" id="products">
              <Dashboard />
            </section>
            <Cart />
            <UserPanel />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
