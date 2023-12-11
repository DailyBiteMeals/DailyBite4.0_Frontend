import React from "react";
import { Link } from "react-router-dom";
import DailybiteLogo from "./../../assets/Logo/DailyBite_white_logo.png";

// icons
import Facebook from "../../assets/icons/FacebookIcon.png";
import Twitter from "../../assets/icons/TwitterIcon.png";
import Instagram from "../../assets/icons/Instagram.png";
import Youtube from "../../assets/icons/YoutubeIcon.png";
import LinkedIn from "../../assets/icons/LinkdinIcon.png";

function Footer() {
  return (
    <footer className="bg-mainOrange border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={DailybiteLogo} className="mr-3 h-16" alt="Logo" />
            </Link>
            <p className="text-xl font-InterMedium text-white w-80">
              17, 24th Main Rd, 3rd Cross Rd, Agara Village, 1st Sector, HSR
              Layout, Bengaluru, Karnataka 560102
            </p>
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
                  className="w-10 h-10 sepia invert brightness-0"
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
                  className="w-10 h-10 sepia invert brightness-0"
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
                  className="w-10 h-10 sepia invert brightness-0"
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
                  className="w-10 h-10 sepia invert brightness-0"
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
                  className="w-10 h-10 sepia invert brightness-0"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-2xl">
            <div>
              <h2 className="mb-6 text-xl font-semibold text-white uppercase text-white">
                Resources
              </h2>
              <ul className="text-white font-InterMedium text-xl">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-InterMedium text-xl">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xl text-white sm:text-center">
            © 2023
            <a href="#" className="hover:underline">
              DailyBite
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
