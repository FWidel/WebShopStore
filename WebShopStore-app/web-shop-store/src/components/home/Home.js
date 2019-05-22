import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Dashboard from '../page/Dashboard';

class Home extends Component {

    render(){
        return(
            <React.Fragment>
        <div className="container home">
                <h1>Welcome to our themes store!</h1>
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
               <section name="products" className="products" id="products">
                <Dashboard /> 
             </section>
             </React.Fragment>
              );
    }

}


export default Home;