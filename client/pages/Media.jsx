'use strict';
import React from 'react';
import ImageBackground from '../components/ImageBackground.jsx';
import PageHeading from '../components/PageHeading.jsx';
import ImageGallery from 'react-image-gallery';

var Media = React.createClass({

  componentDidMount: function() {
    attachSmoothScroll();
  },
  componentWillUnmount: function() {
    detachSmoothScroll();
  },
  render: function() {
    const images = [
      {
        original: './client/images/ProductsBackground.jpg',
        thumbnail: './client/images/ProductsBackground.jpg',
        originalClass: 'galleryImage'
      },
      {
        original: './client/images/FaqBackground.jpg',
        thumbnail: './client/images/FaqBackground.jpg',
        originalClass: 'galleryImage'
      },
      {
        original: './client/images/MediaBackground.jpg',
        thumbnail: './client/images/MediaBackground.jpg',
        originalClass: 'galleryImage'
      }
    ];

    return (
      <div>
        <ImageBackground
            backgroundImageClassName="mediaBackground"
            >
            <PageHeading
              mainHeading="Media"
              />
        </ImageBackground>

        <div id="content" className="container">
          <div className="spacer"/>
          <h1 className="text-center">Photos</h1>
          <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            showBullets={true}
            />
          <div className="spacer"/>
        </div>
      </div>
    );
  }
});

export default Media;
