import React, {Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()
    this.state={
      open: false,
      width: '160px',
      left: '100vw'
    }
    var timer = setTimeout(()=>{this.setState({width:'100%',left:'0vw'})},500)
  }

  render(){
    return (
      <header className="container-fluid">
        <h1 style={{left: this.state.left}}><a href="mailto:yourdrunkenuncle@gmail.com">YDU Tours Coming Soon</a></h1>

        <a className='logo' href='https://www.youtube.com/channel/UCPUGsJo_KV8vwtme58yOemQ' style={{width: this.state.width}}>

          <img className="img-fluid" src="img/logo.png" />
        </a>
      </header>
    )
  }
}
