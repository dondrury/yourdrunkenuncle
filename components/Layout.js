'use strict';

import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header></Header>
        <div id='gnm-main-body' >
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
