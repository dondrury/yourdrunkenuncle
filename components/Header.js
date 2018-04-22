import React, {Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()

  }


  render(){
    return (
      <header >

          <ul>

            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="https://www.cafepress.com/yourdrunkenuncle">Merch</a>
            </li>

          </ul>
          <a href="/">
              <img src="img/YDU-head.png" />
          </a>

          <a className="logo" href="https://www.youtube.com/channel/UCPUGsJo_KV8vwtme58yOemQ">
            <img  src="img/Subscribe.png" />
          </a>


      </header>
    )
  }
}

/*
<div>
  <a className='logo' href='/'>
    <img  src={this.state.collapsed ? "img/YDU-head.png" : "img/logo.png"} style={{marginTop:'0px'}}/>
  </a>
</div>
*/
