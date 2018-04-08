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
              <a href="/">WTF?</a>
            </li>
            <li>
              <a href="/tours">Wander?</a>
            </li>
            <li>
              <a href="/merch">Merch</a>
            </li>
            <li>
              <a href="/cook">YDU COOK?</a>
            </li>
            <li>
              <a href="/thoughts">Ramblings</a>
            </li>
          </ul>
        </div>

        <div>
          <a className='logo' href='https://www.youtube.com/channel/UCPUGsJo_KV8vwtme58yOemQ'>
            <img  src={this.state.collapsed ? "img/YDU-head.png" : "img/logo.png"} style={{marginTop:'0px'}}/>
          </a>
        </div>

      </header>
    )
  }
}
