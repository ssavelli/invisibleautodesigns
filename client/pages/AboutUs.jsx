'use strict';
import React from 'react';
import ImageBackground from '../components/ImageBackground.jsx';
import PageHeading from '../components/PageHeading.jsx';

var AboutUsPage = React.createClass({
  componentDidMount: function() {
    attachSmoothScroll();
  },
  componentWillUnmount: function() {
    detachSmoothScroll();
  },
  render: function() {
    return (
      <div>
        <ImageBackground
            backgroundImageClassName="aboutUsBackground"
            >
            <PageHeading
              mainHeading="About Us"
              />
        </ImageBackground>

        <div id="content" className="container">
          <div className="spacer"/>
          <h1 className="text-center">Our Story</h1>
          <p>In the summer of 2006, while working as an Engineer at Roush Racing in Detroit, Michigan, I stumbled upon an article in a magazine about automotive paint protection film. Initially the product caught my interest and I considered it a good aftermarket option for my vehicle to help prevent damage to the front end during my long highway commute to and from work. As I began to research further and call various shops to inquire, I was left unsatisfied with the responses I was receiving from installers. Most offered paint protection film, but also tint, and a variety of other automotive related items. Each seemed to use a different film and offer varying coverage options (from only small Hood strips to Hood, Fender & Front Bumper coverage), which left me with many unanswered questions. On top of that, when visiting shops to see their work in person I was surprised at the poor quality of the installations, which didn’t seem to match online pictures. At that point I began the long and arduous process of calling and emailing pattern designers and film manufacturers in order to better understand the products, and industry in general. What I realized is that the inconsistency of the designs, films and quality of installations could be avoided. As my knowledge and passion for this industry grew, and feeling confident that others had similar experiences, I decided that I would create the company that I was initially looking for. A company that specialized specifically in paint protection film, who’s goal was to offer the highest quality installations, using the best materials offered and the most accurate designs for each make and model vehicle; all while providing the best customer service possible. After becoming certified and performing a number of installations on family and friends vehicles, I established Advanced Automotive Films Inc. (formerly Advanced Mobile Group). Seven years later, through word of mouth and referrals only, we have established ourselves as the leader in the paint protection film industry. Everyday is a new adventure and it excites me to meet new customers, answer their questions, educate them on paint protection film and then meet and exceed their expectations for the installation on their vehicle.</p>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>

          <h1 className="text-center">Why Choose Advanced Automotive Films</h1>
          <p>As the paint protection film industry grows in popularity, many automotive shops see an opportunity to increase revenue by adding it to their list of services offered. Often customers are attracted by lower prices and assume that all shops will provide the same quality of workmanship, performed by certified installers. Unfortunately, that is not the case. We often encounter customers who are unhappy with quality of their installation. While it may seem attractive to select an installation company based on convenience or price, there are many other factors to consider. Material type, pre-cut kit or custom, quality of installation, customer service and then finally price. The application of clear film should be viewed as a specialized craft, one which cannot be taught in a four day course, but requires years of experience and fine tuning. Our workmanship, attention to detail, commitment to achieving the most flawless installations, constant testing of films and focus on customer service have allowed us to be recognized the leader in the film industry.</p>
          <p>At Advanced Automotive Films, we are constantly testing new films and products in order to ensure we are offering our customers the best quality materials available. All installations are performed by a certified installer. Each vehicle design is unique, so we take the time to research every job prior to working on a vehicle in order to determine which kit(s) design best suits your vehicle for the most flawless and invisible installation. We then provide you with a list of coverage options and pricing so you can select a package that best suits your vehicle protection priorities and budget.</p>
          <p>As with any purchased product that carries a warranty, customers can also feel confident that should an issue arise with their paint protection film installation, we will be there to address those concerns in a timely manor.</p>
          <div className="spacer"/>
        </div>
      </div>
    );
  }
});

export default AboutUsPage;
