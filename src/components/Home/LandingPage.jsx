import React from "react";
import { Link } from "react-router-dom";
import DailyBiteMainImage from "./../../assets/Landing Page/main1.png";

function LandingPage() {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col bg-mainOrange font-acuminpro text-white h-120 lg:flex-row lg:h-120">
        <div className="flex-1 text-white pt-10 order-2 lg:pt-10 lg:order-1">
          <p className="font-ExtraCondensedBlack text-center lg:pl-20 lg:text-left">
            <span className="text-6xl text-center uppercase lg:text-15xl lg:text-left">
              Choose Right,
            </span>
            <br></br>
            <span className="text-12xl leading-10 text-center uppercase lg:text-22xl lg:leading-12 lg:text-left">
              dailybite
            </span>
          </p>
          <Link
            to="/contact"
            className="flex items-center pl-20 mt-3 pb-5 lg:pl-20 lg:mt-6 lg:pb-10 items-center"
          >
            <button className="bg-DailybiteDarkChocolaty flex items-center rounded-md px-12 py-2 lg:items-center lg:rounded-md lg:px-12 lg:py-2">
              <p className=" font-InterMedium text-lg lg:text-2xl">
                Order Trial
              </p>
              <svg
                xmlns="http://www.w3.org/3000/svg"
                fillRule="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 ml-2 lg:h-5 lg:w-5 lg:ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <img
            src={DailyBiteMainImage}
            alt="Landing Page"
            className="max-w-full mb-[-40%]  lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
