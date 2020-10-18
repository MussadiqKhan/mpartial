import React from "react";
import "./deliverables.styles.css";

const Deliverables = () => {
  return (
    <div>
      <div className="deliverables">
        <div className="container">
          <div className="main">
            <h1>Example Deliverables</h1>
          </div>
          <div className="deliverables-text">
            <h1>
              Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch
              PLUS)
            </h1>
          </div>
          <div className="matterport">
            <div>
              <iframe
                src="https://my.matterport.com/show/?m=e5Wxtu8Arbx"
                width="95%"
                height="480"
                title="preMitigation"
                allowFullScreen
                allow="vr"
                frameBorder="0"
              />
            </div>
            <div>
              <iframe
                src="https://my.matterport.com/show/?m=DhqzGgT7M1E"
                width="95%"
                height="480"
                title="postMitigation"
                frameBorder="0"
                allowFullScreen
                allow="vr"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
