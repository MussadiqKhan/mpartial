import React from "react";
import Img from "react-cool-img";
import "./deliverables.styles.css";
import { Carousel } from "react-bootstrap";
import image1 from "../../static/images/image1.jpg";
import image2 from "../../static/images/image2.jpg";
import image3 from "../../static/images/image3.jpg";
import image4 from "../../static/images/image4.jpg";
import sketch1 from "../../static/images/sketch1.png";
import sketch2 from "../../static/images/sketch2.png";

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
          <div className="carousel">
            <h1>Immaculate. Impartial. [ESX]</h1>
            <Carousel>
              <Carousel.Item>
                <Img
                  style={{
                    backgroundColor: "white",
                    width: "480",
                    height: "320",
                  }}
                  className="d-block w-100"
                  src={image2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  style={{
                    backgroundColor: "white",
                    width: "480",
                    height: "320",
                  }}
                  className="d-block w-100"
                  src={image1}
                  alt="Third slide"
                  loading="lazy"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  style={{
                    backgroundColor: "white",
                    width: "480",
                    height: "320",
                  }}
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                  loading="lazy"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  style={{
                    backgroundColor: "white",
                    width: "480",
                    height: "320",
                  }}
                  className="d-block w-100"
                  src={image4}
                  alt="Third slide"
                  loading="lazy"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="true-sketch">
            <h1>TrueSketch PLUS [SKX]</h1>
            <div className="sketches">
              <Img
                style={{
                  backgroundColor: "white",
                  width: "480",
                  height: "320",
                }}
                src={sketch2}
                alt="sketch-1"
                loading="lazy"
              />
              <Img
                style={{
                  backgroundColor: "white",
                  width: "480",
                  height: "320",
                }}
                src={sketch1}
                alt="sketch-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
