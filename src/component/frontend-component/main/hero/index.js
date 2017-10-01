import React from 'react';
import './_hero.scss';


class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photoURI: 'https://s3-us-west-2.amazonaws.com/eskate/2017-new-theme-raptor-2.jpg',
    };
  }

  render(){
    return(
      <div className='hero-container'>
        <img className='hero-photo' src={this.state.photoURI} />
      </div>

    );
  }
}

export default Hero;
