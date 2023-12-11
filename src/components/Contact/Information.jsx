import React from "react";
// import { Link } from "react-router-dom";
import ContactIcon from "../../assets/icons/ContactIcon.png";
import Location from "../../assets/icons/Location.png";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";
import LinkedIn from "../../assets/icons/LinkdinIcon.png";
import Instagram from "../../assets/icons/Instagram.png";
import Youtube from "../../assets/icons/YoutubeIcon.png";
import Twitter from "../../assets/icons/TwitterIcon.png";
import Facebook from "../../assets/icons/FacebookIcon.png";

import COntactInfo from "../../assets/ContactInfo.jpg";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center max-w-8xl mx-auto my-5 lg:my-10 bg-white p-4 lg:p-8 space-x-4 lg:space-x-8 mx-4 lg:mx-8 p-3 lg:p-6">
      {/* Left Column */}
      <div className="bg-gray-200 p-2 lg:p-4 rounded-lg flex flex-col items-start font-ExtraCondensedMedium text-3xl">
        <h2 className="text-4xl lg:text-4xl font-ExtraCondensedBold text-mainOrange">
          Contact Information
        </h2>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 bg-gray-500 rounded-full">
            <img src={ContactIcon} alt="" srcset="" />
          </div>
          <p>+91 86602 03805</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 lg:w-8 lg:h-8 bg-gray-500 rounded-full">
            <img src={Location} alt="" srcset="" />
          </div>
          <p>
            17, 24th Main Rd, 3rd Cross Rd, <br></br>Agara Village, 1st Sector,
            HSR Layout, Bengaluru, <br></br>Karnataka 560102
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 bg-gray-500 rounded-full">
            <img src={WhatsAppIcon} alt="" srcset="" />
          </div>
          <p>+91 86602 03805</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 bg-gray-500 rounded-full">
            <img src={EmailIcon} alt="" />
          </div>
          <p>info@dailybite.in</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2 mt-4 color-mainOrange ">
          <a
            href="https://www.linkedin.com/company/daily-bite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />
          </a>
          <a
            href="https://instagram.com/dailybite.meal?igshid=YTQwZjQ0NmI0OA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />
          </a>
          <a
            href="https://youtube.com/@dailybitemeal?si=5rBi-dGq8L5-hBPl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Youtube}
              alt="Youtube"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />
          </a>
          <a
            href="https://twitter.com/dailybitemeal?t=WuNdpD8HcSJozDFdOYLWiQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Twitter}
              alt="Twitter"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093328969581"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <img
          src={COntactInfo}
          alt="Image"
          className="rounded-lg object-cover w-full h-96"
        />
      </div>
    </div>
  );
};

export default Contact;
