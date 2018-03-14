import React, { Component } from 'react';
import fetch from 'node-fetch';

var blogEntries = [];
var lastUpdated = Date.now()

class Home extends Component {
  constructor(){
    super()
  }


  render(){ //REQUIRED
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">home one</div>
          <div className="col">home two</div>
        </div>
      </div>
    )
  }
}

export default Home;
