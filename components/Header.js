import React, {Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()
    this.state={
      open: false
    }
  }

  render(){
    return (
      <header className="container-fluid">
        <a href='https://www.youtube.com/channel/UCPUGsJo_KV8vwtme58yOemQ'>
          <img className="img-fluid logo" src="img/logo.png" />
        </a>
      </header>
    )
  }
}
