'use strict';
import React from 'react';
import VideoBackground from '../components/VideoBackground.jsx';
import PageHeading from '../components/PageHeading.jsx';
import Quote from '../components/Quote.jsx';

var HomePage = React.createClass({
  componentDidMount: function() {
    attachSmoothScroll();
  },
  componentWillUnmount: function() {
    detachSmoothScroll();
  },
  render: function() {
    return (
      <div>
        <VideoBackground
          videoSource="http://advancedautomotivefilm.com/wp-content/uploads/2015/03/film-application-teaser.mp4"
          fallbackImageSource="./client/images/StaticBackground.jpg"
          backgroundImageClassName="homeBackground"
          >
            <PageHeading
              mainHeading="Protect Your Investment"
              subHeading="Invisible Auto Designs is the premier distributor and installer of automotive Paint Protection Film."
              />
        </VideoBackground>

        <div id="content" className="container">
          <div className="spacer"/>
          <p>Due to the amount of time your vehicle spends on the road, it’s quite common to accumulate stone chips. Not only are these imperfections eye sores, they also have a negative effect on your vehicle’s resale value. Now you can protect your investment and keep your vehicle’s paint looking brand new. We, at Advanced Automotive Films, are the premier distributor and installer of automotive Paint Protection Film throughout the Greater Toronto Area and Southwestern Ontario, Canada.</p>
          <div className="smallSpacer"/>
          <p>Paint Protection Film, also known as “Clear Bra”, protects your vehicle’s painted surfaces from damage caused by rocks, gravel, salt or insects through the application of a thin and virtually invisible urethane film</p>
          <div className="spacer"/>
          <hr/>
          <div className="spacer"/>
          <Quote quoteText="My clear bra looks 100x better than the one I had on before." quoteSource="Kevin"/>
          <div className="smallSpacer"/>
          <Quote quoteText="Reid’s attention to detail and the assurance of customer satisfaction are second to none. I have used other clear bra installers and products in the past and they couldn’t measure up to my expectation. I have received numerous commendations about my clear bra in terms of clarity, invisibleness and workmanship. I highly recommend him to those who cannot tolerate imperfection on their cars." quoteSource="Rex" rightAlign="true"/>
          <div className="smallSpacer"/>
          <Quote quoteText="I’m so impressed with the clear bra." quoteSource="Darren"/>
          <div className="smallSpacer"/>
          <Quote quoteText="Just wanted to say thanks for the awesome job you did … the car looks phenomenal" quoteSource="Jim" rightAlign="true"/>
          <div className="spacer"/>
        </div>
      </div>
    );
  }
});

export default HomePage;
