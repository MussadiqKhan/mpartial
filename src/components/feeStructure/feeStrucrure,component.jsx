import React, { useState } from "react";
import "react-rangeslider/lib/index.css";
import Slider from "react-rangeslider";
import "./feeStructure.styles.css";

const FeeStructure = () => {
  const [cost, setCost] = useState(0);

  const onChange = (value) => setCost(value);

  return (
    <div>
      <div className="fee-structure">
        <div className="container">
          <div className="main">
            <h1>Waterfall Fee Structure</h1>
          </div>
          <div className="slider">
            <Slider
              alwaysShowTooltip={true}
              min={0}
              value={cost}
              max={1000000}
              onChange={onChange}
              step={50000}
              orientation="horizontal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;