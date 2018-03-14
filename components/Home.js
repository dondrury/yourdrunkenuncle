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
      <div>
        <div>Home Page Stuff</div>
      </div>
    )
  }
}

export default Home;
