'use strict';
import React from 'react';
import ImageBackground from '../components/ImageBackground.jsx';
import PageHeading from '../components/PageHeading.jsx';

var FaqPage = React.createClass({
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
            backgroundImageClassName="faqBackground"
            >
            <PageHeading
              mainHeading="Maintenance &amp; FAQ"
              />
        </ImageBackground>

        <div id="content" className="container">
          <div className="spacer"/>
          <h1 className="text-center">Film Maintenance</h1>
          <p>Following the installation of your paint protection film, the film should be allowed to cure. During this time, you may find area’s that are foggy or blotchy, and you may notice solution pockets(bubbles) under the film. This is common on all installations and will disappear after the film is fully cured. Cure time varies based on temperatures and humidity, but an approximate cure time would be 45 days.</p>
          <p>Immediately following the installation, your vehicle should not be washed for 72 hrs, which will allow the film edges to dry.</p>
          <p>We recommend regular hand washes, using a high quality liquid based automotive grade soap, water and soft wash mitt. This is the safest method of cleaning your vehicle, and the area’s covered with film in order to reduce the risk of damaging the film and in order to maintain it’s original gloss. Often times automated car washes use strong chemicals to remove dirt from vehicles. These chemicals can prematurely age your film and leave it looking cloudy. Furthermore, there is the potential for the pressure of the water jets to lift the film if sprayed directly at an edge.</p>
          <p>Following washes, the surfaces covered with paint protection film should be protected with a high quality spray wax, such as our Advanced PPF PPF Finishing Spray. This will provide an extra barrier of protection over the film, reducing the risk of staining and embedded contamination.</p>
          <p>Bird droppings, bug stains, tree sap and tar are very problematic for film, therefore, they should be removed from the films surface immediately. In order to remove these stains we recommend saturating the area with a quick detailer, or warm water, to loosen up the stain. Using a soft microfibre cloth, gently remove all of the residue from the area. You may need to re-saturate the area again in order to fully remove the stain. In some instances an etching or light stain may be visible in the area, generally this bleaches out or disappears after about a weeks in the sun. NOTE: When cleaning film, you should not rub at or use excessive pressure, as this may scratch the films topcoat. Abrasive sponges, paper towels or regular towels should not be used on film, as they too may scratch the film.</p>
          <p>Petroleum distillates should be avoided on film at all times, as they may cause film to discolour. This includes petroleum based waxes, polishes and all purpose cleaners. Waxes may also contain chemicals such as toluene, kerosene and naphtha, which could cause film to degloss and/or dry out prematurely. Please contact us for an up to date list of recommended maintenance products.</p>
          <p>Failure to properly maintain film may void your warranty.</p>
          <div className="spacer"/>

          <hr/>
          <div className="spacer"/>

          <div className="smallSpacer"/>
          <h1 className="text-center">FAQ</h1>
          <h4>Will the Paint Protection Film be noticeable on my vehicle?</h4>
          <p>No. Unlike common black vehicle bras and hard plastic bug shields, our product is a clear film with a high gloss that allows the beauty of your vehicles original paint to show through. During the installation process we wrap edges whenever possible in order to prevent accumulation of dirt and debris, this also assists in making the installation less visible.</p>

          <div className="smallSpacer"/>
          <h4>Will my vehicles paint fade differently under the film than it does on the rest of the vehicle?</h4>
          <p>No. The film contains an inhibitor which will prevent the plastic from reacting to the sun’s UV rays, but this does not prevent the UV rays from passing through the film into your paint. As long as the uncovered portions of the paint were properly maintained with regular washes and wax, then there would be no indication that film was ever installed if it were to be removed.</p>

          <div className="smallSpacer"/>
          <h4>Can the Paint Protection Film be removed?</h4>
          <p>Yes. The film can be removed easily and will not damage your vehicles painted surfaces. However, the film cannot be re-used after it is removed, therefore a new kit would have to be reinstalled.</p>

          <div className="smallSpacer"/>
          <h4>Does the Paint Protection Film require special care?</h4>
          <p>Please refer to our Film Maintenance section above for a detailed outline of our recommended film maintenance.</p>

          <div className="smallSpacer"/>
          <h4>Will film yellow over time?</h4>
          <p>The term “yellowing” refers to the films discoloration, commonly caused by environmental contamination or use of improper products. It is natural for all urethane to discolor to some degree over time depending on how well the film is maintained. However, with the newer technology films, it would be to a degree that is not noticeable unless under fluorescent lighting. Regular maintenance will ensure your film maintains it’s original gloss and will assist in protecting it from, and reducing, discoloration. Please refer to our Film Maintenance section for a detailed outline of our recommended film maintenance.</p>

          <div className="smallSpacer"/>
          <h4>What is the warranty?</h4>
          <p>We provide our clients with a Limited Warranty on installation and products. We warranty our products to be free of product manufacturing defect, bubbling, lifting, fading, and cracking. Failure to properly maintain film may void your warranty.</p>

          <div className="smallSpacer"/>
          <h4>Why are your prices slightly higher then other places I have called?</h4>
          <p>We specialize in paint protection film. We have become a leader in the industry by offering customers with the most discerning eye the highest quality of installation workmanship and customer service. Our pricing is a reflection of this. Other companies in this industry are forced to rely on lower pricing, or incentives, in order to attract customers due to the fact that they cannot compete when it comes to quality.</p>

          <div className="smallSpacer"/>
          <h4>How long will the installation take?</h4>
          <p>Installation times vary based on coverage and job complexity.</p>

          <div className="smallSpacer"/>
          <h4>Repainted panels or body parts?</h4>
          <p>On a body panel that has been professionally repainted, the recommended cure time is 30 days. This is assuming the repaint is of the highest standards. Unfortunately, we frequently encounter repainted panels that are of poor quality, which can lead to paint being pulled if the film ever needs to be removed.</p>

          <div className="spacer"/>
        </div>
      </div>
    );
  }
});

export default FaqPage;
