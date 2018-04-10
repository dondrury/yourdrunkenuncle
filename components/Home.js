import React, { Component } from 'react';
import Carousel from './Carousel'
import Tours from './Tours'

class Home extends Component {
  constructor(){
    super()

  }

  render(){ //REQUIRED
    return (
      <div className="home-page">
      
        <div className='logo sub-logo'>
            <img  src='img/logo.png'/>
            <h1>Life through the bibulous perspective of Grant & Sloan</h1>
        </div>

        <div className="ribbon">
          <div></div>
        </div>
        <Carousel />
        <Tours />

      </div>

    )
  }
}

export default Home;
