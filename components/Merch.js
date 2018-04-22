import React, { Component } from 'react';


export default class Tours extends Component {
  constructor(){
    super()


  }

  render(){ //REQUIRED
    return (
      <div className='merch'>
        <div className='red-line'></div>
        <h2>MERCH<span className='dot'></span></h2>

        <div className='pure-g'>
          <div className='pure-u-1 pure-u-sm-1-2'>
            <p>Find what you're looking for yourself or great gifts for your friends.
              Show your Tulsa pride with the Your Drunken Uncle logo on t-shirts, sweatshirts, mugs, stickers, and more.
            </p>
            <div className='button-container'>
              <a href="https://www.cafepress.com/yourdrunkenuncle">Find Out More</a>
            </div>

          </div>
          <div className='pure-u-1 pure-u-sm-1-2'>
            <img src='img/Merch.png' alt='our merchandise'/>
          </div>
        </div>
      </div>
    )
  }
}
