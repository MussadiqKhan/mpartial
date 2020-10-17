import React from "react";
import "./how-we-do.styles.css";

const HowWeDo = () => {
  return (
    <>
      <div className="how-we-do">
        <div className="container">
          <div className="main">
            <h1>How it Works</h1>
          </div>
          <div className="data-items">
            <div className="data">
              <div className="data-points">1</div>
              <div className="data-text">
                <p>
                  Perform pre-mitigation and post-mitigation scans with a
                  Matterport Pro Series camera.
                </p>
              </div>
            </div>
            <div className="data">
              <div className="data-points">2</div>
              <div className="data-text">
                <p>
                  Perform pre-mitigation and post-mitigation scans with a
                  Matterport Pro Series camera.
                </p>
              </div>
            </div>
            <div className="data">
              <div className="data-points">3</div>
              <div className="data-text">
                <p>
                  Perform pre-mitigation and post-mitigation scans with a
                  Matterport Pro Series camera.
                </p>
              </div>
            </div>
          </div>
          <div className="try-now-btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeDo;
