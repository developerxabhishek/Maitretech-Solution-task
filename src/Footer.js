import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import playstore from "./Image/gplay.png";
import appstore from "./Image/appstore.png";
function Footer() {
  return (
    <>
      <div className="last-section">
        <div className="last-section-container">
          <div className="box-1">
            <h3>Company</h3>
            <p>About</p>
            <p>Facilities</p>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div className="box-2">
            <h3>Activities</h3>
            <p>Art Gallary</p>
            <p>Workshops</p>
            <p>Outdoor Activities</p>
            <p>Media Coverage</p>
            <p>Art Events</p>
            <p>Exhibition</p>
            <p>Daily Acitvities</p>
          </div>
          <div className="box-3">
            <h3>Popular Course</h3>
            <p>Diploma In Fine Arts</p>
            <p>Certificate Hobby Course</p>
            <p>Entrance Preparation</p>
            <p>BFA</p>
            <p>Animation Sketching</p>
            <p>Kids Diploma</p>
          </div>
          <div className="box-4">
            <h3>Our Locations</h3>
            <p>Gurgaon(Dlf Phase-4)</p>
            <p>Mumbai(Andheri West)</p>
            <p>South Delhi(Kailash Colony)</p>
            <h3>International Branches</h3>
            <p>London</p>
            <p>USA</p>
            <p>Dubai,UAE</p>
          </div>
          <div className="box-5">
            <h3>NIFA Is A Unit Of Nifaedutech Pvt Ltd. Connect With Us</h3>
            <p>9555112200,9810130552</p>
            <p>admission@nifafinearts.com</p>
            <div className="icon-div">
              <div className="fb">
                <FaFacebook color="blue" />
              </div>
              <div className="twitter" color="lightblue">
                <BsTwitterX />
              </div>
              <div className="insta">
                <PiInstagramLogoFill color="#b11e6f" />
              </div>
              <div className="yt">
                <BsYoutube color="red" />
              </div>
            </div>
          </div>
          <div className="box-6">
            <h2>Download The App</h2>
            <div>
              <div>
                <img src={playstore} />
              </div>
              <div>
                <img src={appstore} />
              </div>
            </div>
            <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
