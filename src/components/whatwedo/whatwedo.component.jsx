import React from "react";
import ReactCompareImage from "react-compare-image";
import left from "../../static/images/postmitigation.jpg";
import right from "../../static/images/premitigation.jpg";
import handler from "../../static/images/handle.png";

import "./whatwedo.styles.css";

const WhatWeDo = () => {
  return (
    <>
      <div className="container">
        <div className="what-we-do-section">
          <div className="title">
            <h1>GROUND-TRUTH DATA EVERYONE TRUSTS</h1>
          </div>
          <div className="sub-title">
            <p>
              We have combined the best-of-breed technology platforms with an
              eye towards relieving you of administrative burden. Matterport 3D
              scans augmented by TrueSketch PLUS are used to generate consistent
              Xactimate sheets that are delivered in accord with Actionable
              Insights compliance rule sets. Each mpartial is produced with full
              transparency, unprecedented forensic photography, and infallible
              geospatial data that collectively result in rapid approvals.
            </p>
          </div>
        </div>
        <div className="image-comparison">
          <ReactCompareImage
            leftImage={left}
            rightImage={right}
            handle={<img src={handler} alt="handler" />}
            sliderLineColor="rgb(58, 194, 128)"
            sliderPositionPercentage="0.5"
          />
          ;
        </div>
        <div className="try-now-btn">
          <button>Try Now</button>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
