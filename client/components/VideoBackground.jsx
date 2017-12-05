'use strict';
import React from 'react';

var VideoBackground = React.createClass({
  render: function() {
    return (
      <div>
        <div className={ 'fullscreenBackground ' + this.props.backgroundImageClassName } />
        <video autoPlay loop muted className="fullscreen" preload="none"  >
          <source src={this.props.videoSource} type="video/mp4" />
          <img className="fullscreen" src={this.props.fallbackImageSource} title="Your browser does not support the video tag" />
        </video>
        {this.props.children}
      </div>
    );
  }
});

export default VideoBackground;
