'use strict';
import React from 'react';

var Quote = React.createClass({

  getClassName: function() {
    return this.props.rightAlign ? 'blockquote-reverse' : '';
  },

  render: function() {
    return (
        <blockquote className={this.getClassName()}>
          <p>{this.props.quoteText}</p>
          <footer>{this.props.quoteSource}</footer>
        </blockquote>
    );
  }
});

export default Quote;
