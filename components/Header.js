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
        <div className="row">
          <div className="col">Header</div>
        </div>
      </header>
    )
  }
}
