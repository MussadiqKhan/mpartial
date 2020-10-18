import React, { useState } from "react";
import Slider from "react-rangeslider";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./feeStructure.styles.css";

const FeeStructure = () => {
  const [cost, setCost] = useState(0);

  const onChange = (value) => setCost(value);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        Fee Structure Example: An estimate grand total of $100k will result in a
        fee of $7,360. The $750 deposit will be collected upon submission and
        applied toward the overarching fee.
      </Popover.Content>
    </Popover>
  );

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
              <br />
              Move forward based on the estimated fee structure below.
            </p>
            <div className="slider-data">
              <div className="data-value">
                <label>${cost}</label>
                <span>mpartial fee</span>
              </div>

              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <AiOutlineInfoCircle className="info-icon" variant="success" />
              </OverlayTrigger>
            </div>
            [$750 minimum]
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
