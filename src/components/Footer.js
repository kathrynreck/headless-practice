import React from "react"

import tangoFB from "../images/tango-facebook-icon.svg"
import tangoIG from "../images/tango-instagram-icon.svg"
import tangoLI from "../images/tango-linkedin-icon.svg"

import { FooterWrapper } from "./styles/FooterStyles"

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">CONTACT</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>ANDERS LINDEN</h3>
          <p className="tango-contact">
            <a href="mailto:anders@tangobrandalliance.se">
              anders@tangobrandalliance.se
            </a>
          </p>
          <p className="tango-contact">+46 number blah blah</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopenet norefferer"
              href="https://www.linkedin.com/in/anders-linden-06893316"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>KATHRYN LINDEN</h3>
          <p className="tango-contact">
            <a href="mailto:anders@tangobrandalliance.se">
              anders@tangobrandalliance.se
            </a>
          </p>
          <p className="tango-contact">+46 number blah blah</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopenet norefferer"
              href="https://www.linkedin.com/in/anders-linden-06893316"
            >
              <img src={tangoFB} alt="tango-FB" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>ANDERS LINDEN</h3>
          <p className="tango-contact">
            <a href="mailto:anders@tangobrandalliance.se">
              anders@tangobrandalliance.se
            </a>
          </p>
          <p className="tango-contact">+46 number blah blah</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopenet norefferer"
              href="https://www.linkedin.com/in/anders-linden-06893316"
            >
              <img src={tangoIG} alt="tango-IG" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
