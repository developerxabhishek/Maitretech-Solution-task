import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
function Top() {
  return (
    <>
      <div className="main-container">
        <ul>
          <li>Welcome to the National Institute of Fine Arts</li></ul><ul>
          <li>
            <FaPhone style={{ fontSize: "12px", paddingRight: "2px" ,marginRight:"8px", fontWeight:"bolder"  }} />
            9555112200
          </li>
          <li>
            {" "}
            <FaPhone style={{ fontSize: "12px", paddingRight: "2px",marginRight:"8px", fontWeight:"bolder" }} />
            9810130552
          </li>
          <li>
            <MdMail
              style={{
                fontSize: "16px",
                paddingRight: "2px",
                marginBottom: "-3px",
              }}
            />
            admission@nifafinearts.com
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <PiInstagramLogoFill />
          </li>
          <li>
            <BsTwitterX />
          </li>
          <li>
            <BsYoutube />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Top;
