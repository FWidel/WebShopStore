import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/page/Navbar';
import Footer from './components/page/Footer';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import UserPanel from './components/user/UserPanel';
import Checkout from './components/checkout/Checkout';

import Settings from './components/user/Settings';

class App extends Component {
  state = {
    didMount: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true })
    }, 0)
  }


  render() {

    const { didMount } = this.state
    return (
      <Provider store={store}>
        <Router>
          <div className={`app fade-in ${didMount && 'visible'}`}>
            <Navbar />
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/account' component={UserPanel} />
              <Route path='/WebShopStore/checkout' component={Checkout} />
              <Route path='/WebShopStore/settings' component={Settings} />

            </Switch>
            <Cart />
            <ToastContainer />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
