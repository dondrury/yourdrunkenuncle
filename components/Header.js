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
              <a href="/merch">Merch</a>
            </li>

          </ul>
          <img src="img/YDU-head.png"></img>


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
