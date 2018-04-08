import React, {Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()
    this.state={
      collapsed: false
    }



  }


  render(){
    return (
      <header className={this.state.collapsed ? 'collapsed' : ''}>
        <div>
          <ul>

            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="/merch">Merch</a>
            </li>
          
          </ul>
        </div>
        <div>
          <a className='logo' href='/'>
            <img  src={this.state.collapsed ? "img/YDU-head.png" : "img/logo.png"} style={{marginTop:'0px'}}/>
          </a>
        </div>

      </header>
    )
  }
}
