'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import Header from './Header'

export default class Layout extends Component {
  render() {
    return (
      <div >
        <Header></Header>
        <div id='gnm-main-body' >
          {this.props.children}
        </div>
        <div>Footer</div>
      </div>
    )
  }
}
