'use strict';
import React from 'react';

var PageFooter = React.createClass({
  render: function() {
    return (
      <div className="container-fluid footer">
        <div className="smallSpacer"/>
        <div className="row text-center">
          <div className="col-md-12">
            <a className="text-centered" href="#top">
              <img src="./client/images/UpArrow.png" />
            </a>
          </div>
        </div>
        <div className="smallerSpacer"/>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-3">
            <span>
              <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> (905) 252-8584
            </span>
            <div className="smallestSpacer"/>
            <a href="mailto:jr_savelli@hotmail.com">
              <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Reid Savelli
            </a>
            <div className="smallestSpacer"/>
          </div>
          <div className="col-md-5">
            © 2016 Invisible Auto Designs Inc.
            <div className="smallestSpacer"/>
            All rights reserved.
            <div className="smallestSpacer"/>
          </div>
        </div>
        <div className="smallerSpacer"/>
      </div>
    );
  }
});

export default PageFooter;
