import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      feature: false,
      videos: []
    }

    if(typeof window === 'object'){
      this.state.feature = 'https://www.youtube.com/embed/rpUclk4By7o?ecver=2';
      this.state.videos = ['https://www.youtube.com/embed/NjG6NVEZPec?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2',
                   'https://www.youtube.com/embed/QNLb5kdRKM8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2',
                 'https://www.youtube.com/embed/PSmNum0XuS8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2']
    } //do this to prevent client-side reload of the iframes


  }

  render(){ //REQUIRED
    return (

        <section className='carousel'>
          <div className="feature">
            {this.state.feature ? (
                <iframe src={this.state.feature} allowFullScreen></iframe>
            ) : null}

          </div>
          <div className="videos">
            {this.state.videos.map(function(v,i,a){
                return (
                    <iframe key={i} src={v} allowFullScreen></iframe>
                )
              })
            }
          </div>

        </section>


    )
  }
}
