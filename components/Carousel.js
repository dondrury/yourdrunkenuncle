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
      this.state.videos = [
        {src: 'https://www.youtube.com/embed/NjG6NVEZPec?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2', left: 0,z: -2,opacity: 0},
        {src: 'https://www.youtube.com/embed/QNLb5kdRKM8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2',left:0,z:-1,opacity:0},
        {src: 'https://www.youtube.com/embed/PSmNum0XuS8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2',left: 0,z:-2,opacity:0}
      ]
    } //do this to prevent client-side reload of the iframes


  }

  componentDidMount(){


  }

  expand = () =>{
    var videos = this.state.videos
    videos[0].opacity = videos[1].opacity = videos[2].opacity = 1;
    videos[0].left = -100;
    videos[2].left= 100;
    this.setState({videos})
    setTimeout(()=>{
        var videos = this.state.videos
        videos[0].z = videos[1].z = videos[2].z = 0;
          this.setState({videos})
    },1000)
  }

  render(){ //REQUIRED
    return (

        <section className='carousel'>
          <div className="feature">
            {this.state.feature ? (
                <iframe src={this.state.feature} allowFullScreen onLoad={this.expand}/>
            ) : null}

          </div>
          <div className="videos">
          {this.state.videos.map(function(v,i,a){
              return (
                  <iframe key={i} src={v.src} allowFullScreen
                    style={{transform: `translate(${v.left}%,0)`,zIndex: v.z,opacity: v.opacity}}
                    />
              )
            })
          }
          </div>

        </section>


    )
  }
}
