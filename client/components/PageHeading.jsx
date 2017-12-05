'use strict';
import React from 'react';

var PageHeading = React.createClass({
  render: function() {
    return (
      <div id="top" className="overlay-container">
        <div className="heading-overlay" >
          <h1>{this.props.mainHeading}</h1>
          {this._getSubHeading()}
          <div className="headingBottomSpacer"/>
          <a href="#content">
            <img src="./client/images/DownArrow.png" />
          </a>
        </div>
      </div>
    );
  },
  _getSubHeading: function() {
    if (this.props.subHeading) {
      return (
        <span>
          <div className="headingSpacer"/>
          {this.props.subHeading}
        </span>
      );
    }

    return '';
  }
});

export default PageHeading;
