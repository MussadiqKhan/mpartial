import React from "react";
import fb from "../../static/images/fb.svg";
import insta from "../../static/images/insta.svg";
import linked from "../../static/images/linked.svg";

import "./footer.styles.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <p>
                mpartial, a 4D Schematics Company. Copyright 2020 all rights
                reserved.
              </p>
            </div>
            <div className="social">
              <ul>
                <li>
                  <img src={fb} alt="facebook" />
                </li>
                <li>
                  <img src={insta} alt="instagram" />
                </li>
                <li>
                  <img src={linked} alt="linkedin" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
