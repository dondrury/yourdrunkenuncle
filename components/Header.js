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
      <header>
        I'm the header
      </header>
    )
  }
}
