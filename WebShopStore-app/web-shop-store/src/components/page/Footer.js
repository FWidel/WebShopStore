import React, { Component } from 'react';
import styled from 'styled-components';
class Footer extends Component {
  render() {

    let Footer = styled.footer`
      text-align: center;
      padding: 8px 0;
      font-size: 13px;
    
      p {
        margin-bottom: 5px;
      }
      `;
    return (      
      <Footer>
        <p>
          2019 &copy; Wideł Franciszek
         All rights reserved.
        </p>
      </Footer>
    );
  }
}

export default Footer;
