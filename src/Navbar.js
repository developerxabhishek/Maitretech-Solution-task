import React from "react";
import logo from "./Image/nifa-new-logo.png";
function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Image Not Found" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Activities</li>
          <li>Admission</li>
          <li>Art Gallary</li>
          <li>Franchise</li>
          <li>Online Courses</li>
          <li>Videos</li>
          <li> Pay Fees</li>
          <li> Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
