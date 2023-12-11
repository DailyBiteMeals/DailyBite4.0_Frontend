import React from "react";
import LaunchingAppImage from "../../assets/launchingApp.png";

const LaunchingApp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20 w-full">
      {/* First Column */}
      <div className="w-full lg:pr-40">
        <h1 className="text-center text-4xl mb-2 lg:text-left lg:text-2xl lg:mb-2 lg:text-6xl font-ExtraCondensedMedium lg:mb-4 ">
          we are <br></br>
          <span className="text-mainOrange font-ExtraCondensedBlackItalic text-6xl leading-12 lg:text-4xl lg:leading-6 lg:text-8xl lg:leading-12">
            LAUNCHING APP SOON...
          </span>
        </h1>
        <p className="font-InterRegular text-center lg:text-left text-xl lg:text-2xl">
          We are super excited to put you in control, with hundreds of options
          to choose your Dessert, Papad/Namkeen, Dry Subji, Gravy Subji, and
          Rice. All designed to fit seamlessly into your busy corporate
          lifestyle. Stay tuned for the launch of our app, and get ready to
          savor the future of corporate meal delivery!"
        </p>
      </div>

      {/* Second Column */}
      <div>
        <img
          className="object-cover rounded-lg w-full lg:w-80 lg:h-auto"
          src={LaunchingAppImage}
          alt="Sample"
        />
      </div>
    </div>
  );
};

export default LaunchingApp;
