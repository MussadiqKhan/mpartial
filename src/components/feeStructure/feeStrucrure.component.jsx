import React, { useState } from "react";
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
              min={0}
              value={cost}
              max={1000000}
              onChange={onChange}
              step={50000}
              tooltip={true}
              orientation="horizontal"
            />
            <ul className="css-wrrl2p-WaterFall">
              <li>$0</li>
              <li>$250,000</li>
              <li>$550,000</li>
              <li>$750,000</li>
              <li>$1M+</li>
            </ul>
          </div>
          <div className="slider-content">
            <p>
              Drag the slider around based on what you think it will cost to
              repair the property.
            </p>
            <p>Move forward based on the estimated fee structure below.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
