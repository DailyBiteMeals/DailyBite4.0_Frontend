import React from "react";
import WelcomeImage from "../../assets/Welcome.png";

// icons
import ContactIcon from "../../assets/icons/ContactIcon.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";
import Location from "../../assets/icons/Location.png";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon.png";
import Facebook from "../../assets/icons/FacebookIcon.png";
import Twitter from "../../assets/icons/TwitterIcon.png";
import Instagram from "../../assets/icons/Instagram.png";
import Youtube from "../../assets/icons/YoutubeIcon.png";
import LinkedIn from "../../assets/icons/LinkdinIcon.png";

const ContactComponent = () => {
  return (
    <div className="flex justify-center flex-col lg:flex-row lg:items-end lg:space-x-8 lg:mx-8 lg:p-6">
      {/* First Column */}
      <div className="flex flex-row space-y-2 align-right lg:flex-col  lg:space-y-4 lg:align-right">
        <div className="p-2 items-center lg:p-4 rounded-lg lg:items-right">
          <h2 className="text-4xl text-center uppercase lg:text-left align-center lg:text-6xl text-mainOrange font-ExtraCondensedBold lg:align-right">
            Get in touch
          </h2>
          <p className="text-lg leading-6 text-center lg:text-left lg:text-xl font-InterRegular">
            Reach out through our contact form and our team will get back to you
            shortly.
          </p>
          {/* Social Media Icons */}
          <div className="flex mt-2 space-x-1 mt-2 items-center justify-center lg:justify-start lg:space-x-2 lg:mt-4 color-mainOrange ">
            <a
              href="https://www.linkedin.com/company/daily-bite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-8 h-8 lg:w-10 lg:h-10"
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
                className="w-8 h-8 lg:w-10 lg:h-10"
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
                className="w-8 h-8 lg:w-10 lg:h-10"
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
                className="w-8 h-8 lg:w-10 lg:h-10"
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
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div>
        <img src={WelcomeImage} alt="Image" className="rounded-lg p-4 lg:p-0" />
      </div>

      {/* Second Column */}
      <div className="flex flex-col rounded-lg px-6 font-ExtraCondensedMedium text-lg lg:flex-col lg:items-start lg:p-4 lg:text-3xl">
        <h2 className="text-4xl text-center lg:text-left lg:text-4xl font-ExtraCondensedBold text-mainOrange">
          Contact Information
        </h2>
        <div className="flex text-lg space-x-2 mt-2 text-lg lg:items-center lg:space-x-2 lg:mt-2 lg:text-xl font-InterRegular">
          <div className="w-6 h-46lg:w-8 lg:h-8 rounded-full">
            <img src={ContactIcon} alt="" srcset="" />
          </div>
          <p>+91 86602 03805</p>
        </div>
        <div className="flex text-lg space-x-2  lg:items-center lg:space-x-2 font-InterRegular lg:text-xl">
          <div className="w-6 h-6 lg:w-8 lg:h-8  rounded-full">
            <img src={Location} alt="" srcset="" />
          </div>
          <p>
            17, 24th Main Rd, 3rd Cross Rd, <br></br>Agara Village, 1st Sector,
            HSR Layout, Bengaluru, <br></br>Karnataka 560102
          </p>
        </div>
        <div className="flex text-lg  space-x-2 lg:items-center lg:space-x-2 font-InterRegular lg:text-xl">
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full">
            <img
              src={WhatsAppIcon}
              alt=""
              srcset=""
              href="https://wa.me/918660203805"
              className="lg:p-1"
            />
          </div>
          <a href="http://wa.me/918660203805">
            <p>+91 86602 03805</p>
          </a>
        </div>
        <div className="flex text-lg space-x-2 lg:items-center lg:space-x-2 font-InterRegular lg:text-xl">
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full">
            <img src={EmailIcon} alt="" srcset="" />
          </div>
          <p>info@dailybite.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
