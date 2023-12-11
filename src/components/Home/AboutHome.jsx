import React from "react";
import { Link } from "react-router-dom";
import Fade from "./Fade";

const AboutHome = () => {
  return (
    <>
      <div className="flex justify-center mt-8 px-4 lg:mt-10 lg:px-20">
        <div className="flex flex-col lg:flex-row w-full">
          {/* First Column */}
          <div className="w-full lg:w-2/3 lg:pr-6">
            <p className="font-ExtraCondensedBlack uppercase text-center text-6xl leading-12 lg:text-6xl lg:mb-4 lg:leading-10 lg:text-left">
              All-In-One
              <span className="text-mainOrange font-ExtraCondensedBlack">
                {" "}
                Corporate Food Partner
              </span>
            </p>
            <p className="font-InterRegular text-center lg:text-xl lg:leading-7 lg:text-left">
              DailyBite is a FoodTech partner that provides end-to-end corporate
              food solutions for companies. From daily meals to special events,
              we cater to all your food requirements throughout the year. Our
              diverse services include daily and healthy snacks, festival
              feasts, team celebrations, board meetings, and more. Operating on
              a hybrid model with 50+ reputed food suppliers in Bangalore.
              DailyBite effectively combines in-house and outsourced expertise
              to deliver the best possible service in the market. We're already
              serving satisfied clients including Volt Money, Insnap, Bolt,
              Clayworks, Keploy, Fampay, Vance and employees from Accenture,
              Practo, CIEL, Navi and many more. Daily meals and snacks are at
              the core of our service, with Standard Meals, Privilege Meals, and
              Fruit Bowls being our most popular products. Our commitment to
              providing healthy, home-like, tasty food with innovative one-click
              customization features sets us apart.
            </p>
          </div>

          {/* Second Column */}
          <div className="lg:w-1/3 lg:pl-6">
            <div className="lg:mt-8 lg:mt-0 lg:rounded-lg">
              <Fade />
            </div>
          </div>
        </div>
      </div>
      {/* Button Below Row */}
      <div className="lg:mt-8 flex justify-center mt-8">
        <Link to="/about">
          <button className="bg-mainOrange font-ExtraCondensedSemiBold text-center w-40 text-2xl lg:w-60 lg:text-lg uppercase hover:bg-green-600 text-white lg:py-2 lg:px-4 rounded lg:text-6xl">
            Know More
          </button>
        </Link>
      </div>
    </>
  );
};

export default AboutHome;
