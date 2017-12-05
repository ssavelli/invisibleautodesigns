'use strict';
import React from 'react';

var ImageBackground = React.createClass({

  render: function() {
    return (
      <div>
        <div className={ 'fullscreenBackground ' + this.props.backgroundImageClassName } />
        {this.props.children}
      </div>
    );
  }
});

export default ImageBackground;
