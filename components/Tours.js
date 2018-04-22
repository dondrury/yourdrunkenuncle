import React, { Component } from 'react';


export default class Tours extends Component {
  constructor(){
    super()


  }

  render(){ //REQUIRED
    return (

        <div className="tours">
          <div className='title push-down'>
            <h2>TOURS
            </h2>
            <span className='top'>Book Your Amazing </span>
            <span className='bottom'>Irish Odyssey Now</span>
          </div>
          <div className="pure-g content">

            <div className='pure-u-1 pure-u-md-1-2'></div>
            <div className='pure-u-1 pure-u-md-1-2'>
              <p>Explore the unparalleled beauty, culture, and history of the Emerald Isle with your experienced and passionate hosts, Grant & Sloan. Meet the people and hear the stories that make Ireland such an unforgettable place.</p>
            </div>
            <div className='pure-u-1 pure-u-sm-1-3 pure-u-md-3-5'></div>
            <div className='pure-u-1 pure-u-sm-2-3 pure-u-md-2-5'>
              <h3>
                <img  src='img/PlaceHolderIcon-Eat.png' />
                <div>Eat</div>
              </h3>

              <h3>
                <img  src='img/PlaceHolderIcon-Plane.png' />
                <div>Stay</div>
              </h3>
              <h3>
                <img  src='img/PlaceHolderIcon-hiker.png' />
                <div>Transpo</div>
              </h3>
              <div >
                  <a href='/tours'>Find Out More</a>
              </div>

            </div>
          </div>
        </div>
    )
  }
}
