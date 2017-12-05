'use strict';
import React from 'react';
import ImageBackground from '../components/ImageBackground.jsx';
import PageHeading from '../components/PageHeading.jsx';

var ProductsPage = React.createClass({
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
            backgroundImageClassName="productsBackground"
            >
            <PageHeading
              mainHeading="Products"
              />
        </ImageBackground>

        <div id="content" className="container">
          <div className="spacer"/>
          <p>Invisible Auto Designs offers paint protection film from all leading brands.</p>
          <div className="smallSpacer"/>
          <div className="row">
            <div className="col-md-3">
              <div>
                <img src="./client/images/Scotchguard.png"/>
              </div>
              <div>
                <img src="./client/images/Xpel.png"/>
              </div>
              <div>
                <img src="./client/images/3M.png"/>
              </div>
              <div>
                <img src="./client/images/Proskin.png"/>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./client/images/FilmExplodedView.png" className="filmExploded"/>
            </div>
            <div className="col-md-3">
            </div>
          </div>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>
          <h1 className="text-center">Clear – Paint Protection Film</h1>
          <p>Our Clear Paint Protection Film kits are available Pre-Cut or Custom Cut. With access to the largest selection of Pre-cut kits available, we can ensure our customers a wide variety of protection to choose from. All of our Pre-Cut kits are downloaded through DAP software and then sent to a plotter for accurate and precise vehicle designs. Although there are a wide variety of pre-cut kit designs available for all make and model vehicles, often times a custom installation offers more thorough coverage, or coverage on area’s where no pre-cut kits are available. Fortunately, unlike many of our competitors, we offer “Custom Cut” kits which can be created for specific area’s or for a complete vehicle wrap.</p>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>
          <h1 className="text-center">Stealth – Paint Protection Film</h1>
          <p>Our “Matte” or “Stealth” Clear Paint Protection offers customers the option to change their vehicle’s paint to a unique matte, or satin, finish, while still allowing the vehicles original colour to come through. It can also be used as protection over “OEM” matte vehicle finishes currently offered by BMW, Ferrari, Lamborghini, Mercedes, etc. Matte film offers the same durability as our standard paint protection films and is available in pre-cut or custom cut.</p>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>
          <h1 className="text-center">3M 1080 Coloured & Carbon Fiber Films</h1>
          <p>Manufactured from 2mil vinyl, 3M 1080 Coloured & Carbon Fiber film can be used to accessorize interior components or exterior trim pieces (Mirrors, Roofs, Spoilers, Graphics).</p>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>
          <h1 className="text-center">PROSKIN</h1>
          <p>PROSKIN™ film has taken automotive protection to another level by introducing new technology that was specifically designed for paint protection film. PROSKIN™ Sealant chemically bonds and hardens to the protection film of your vehicle giving unrivalled UV resistance, dirt repellency, easy clean and stain resistance. PROSKIN™ Sealant lasts significantly longer than traditional wax methods. Once you have protected your vehicle, PROSKIN™ has new and exclusive state of the art protection and maintenance technology that will keep your film looking good for years to come. In between washes use PROSKIN™ Restore for quick shine enhancement, dirt repellency and UV protection. Based on the same surface technology as PROSKIN™ Sealant, PROSKIN™ Restore provides an addition level of film protection.</p>
          <div className="spacer"/>
        </div>
      </div>
    );
  }
});

export default ProductsPage;
