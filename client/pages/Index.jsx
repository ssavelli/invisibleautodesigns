'use strict';
import React from 'react';
import NavBar from '../components/navbar/NavBar.jsx';
import PageFooter from '../components/PageFooter.jsx';

var IndexPage = React.createClass({
  render: function() {
    return (
      <div>
    		<NavBar />
		    {this.props.children}
        <PageFooter />
      </div>
    );
  }
});

export default IndexPage;
