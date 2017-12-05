'use strict';
import React from 'react';
import { Link } from 'react-router';
import MainStore from '../../data/stores/MainStore.js'

var NavBarItem = React.createClass({

  getInitialState: function() {
    return {
      selected: MainStore.getCurrentPage() === this.props.name
    };
  },

  componentDidMount: function() {
    MainStore.addChangeListener(this.onPageChanged);
  },

  componentWillUnmount: function() {
    MainStore.removeChangeListener(this.onPageChanged);
  },

  getClassName: function() {
    return this.state.selected ? 'active' : '';
  },

  getLinkHtml: function() {
    if (this.props.url) {
      return (
        <Link to={this.props.url}>{this.props.text}</Link>
      );
    }
    else if (this.props.emailHref) {
      return (
        <a href={this.props.emailHref}>{this.props.text}</a>
      );
    }

    return '';
  },

  onPageChanged: function() {
    this.setState({
      selected: MainStore.getCurrentPage() === this.props.name
    });
  },

  render: function() {
    return (
      <li className={this.getClassName()}>{ this.getLinkHtml() }</li>
    );
  }
});

export default NavBarItem;
