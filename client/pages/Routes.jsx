'use strict';
import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';

import Index from './Index.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import FAQ from './FAQ.jsx';
import Media from './Media.jsx';
import AboutUs from './AboutUs.jsx';

import PageChangedActionCreator from '../data/actions/PageChangedActionCreator.js';

var Routes = React.createClass({

  onRouteEnter : function(nextState) {
    if (nextState && nextState.routes && nextState.routes.length > 0) {
      var currentRoute = nextState.routes[nextState.routes.length - 1];
      PageChangedActionCreator(currentRoute.name);
    }
  },

  render: function() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Index} >
          <IndexRoute name="home" component={Home} onEnter={this.onRouteEnter} />
          <Route name="products" path="/products" component={Products} onEnter={this.onRouteEnter} />
          <Route name="faq" path="/faq" component={FAQ} onEnter={this.onRouteEnter} />
          <Route name="media" path="/media" component={Media} onEnter={this.onRouteEnter} />
          <Route name="aboutUs" path="/about-us" component={AboutUs} onEnter={this.onRouteEnter} />
        </Route>
      </Router>
    );
  }
});

export default Routes;
