import React, { Component } from 'react';
import Carousel from './Carousel'

class Home extends Component {
  constructor(){
    super()

  }

  render(){ //REQUIRED
    return (
      <div className="home-page">
        <div className='logo'>
            <img  src='img/YDU-head.png'/>
        </div>
        <div className='logo sub-logo'>
            <img  src='img/Subscribe.png'/>
            <h1>Life through the bibulous perspective of Grant & Sloan</h1>
        </div>

        <div className="ribbon">
          <div></div>
        </div>
        <Carousel />
        <div className="tours">
          <div className='title push-down'>
            <h2>TOURS
            </h2>
            <span className='top'>Ireland Trip Itinerary</span>
            <span className='bottom'>Book Your Amazing Irish Vacation Today</span>
          </div>
          <div className="pure-g content">
            <div className='pure-u-1'></div>
            <div className='pure-u-1 pure-u-md-1-2'></div>
            <div className='pure-u-1 pure-u-md-1-2'>
              <p>Explore the unparalleled beauty, culture, and history of the Emerald Isle with your experienced and passionate hosts, Grant & Sloan. Meet the people and hear the stories that make Ireland such an unforgettable place.</p>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Home;
