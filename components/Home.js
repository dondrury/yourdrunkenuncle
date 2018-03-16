import React, { Component } from 'react';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      opacity: 1
    }
    var timer = setTimeout(()=>{this.setState({opacity:0})},500)
  }

  render(){ //REQUIRED
    return (
      <div className="home-page">
        <img className="img-fluid" src="img/blacksuits.jpg" style={{opacity: this.state.opacity}}/>
      </div>

    )
  }
}

export default Home;
