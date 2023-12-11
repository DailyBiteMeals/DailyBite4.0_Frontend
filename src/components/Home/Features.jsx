import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS classes for styling

// Features images
import pause from "../../assets/Features/pause.png";
import free from "../../assets/Features/free.png";
import gharjaisa from "../../assets/Features/gharjaisa.png";
import healthy from "../../assets/Features/healthy.png";
import onClick from "../../assets/Features/onClick.png";
import onTime from "../../assets/Features/onTime.png";
import deliveryBoy from "../../assets/Features/DailyBiteDeliveryBoy.png";

const Features = () => {
  return (
    <div className="flex flex-wrap justify-items-center px-4 py-4 lg:px-20 lg:py-20 ">
      <div className="flex-1 flex flex-col lg:flex-col justify-center items-center lg:items-left">
        <Feature
          iconBgColor="bg-gray-300"
          icon={onClick}
          title="One Click Customization"
          subtitle="Your cravings, your way - just a click to create your ideal meal."
        />
        <Feature
          iconBgColor="bg-gray-300"
          icon={pause}
          title="Pause or Cancel Anytime"
          subtitle="Life's unpredictable? No problem. Flexibility at your fingertips."
        />
        <Feature
          iconBgColor="bg-gray-300"
          icon={healthy}
          title="Healthy Meal"
          subtitle="Every bite, a step toward a healthier you."
        />
      </div>
      <div className="hidden lg:flex flex-1 flex-col justify-center">
        <img
          src={deliveryBoy}
          alt="DeliveryBoyImage"
          className="w-full  h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-left">
        <Feature
          iconBgColor="bg-gray-300"
          icon={gharjaisa}
          title="Ghar Jaisa Khana"
          subtitle="Delivering the comfort of home-cooked meals, straight to your workspace."
        />
        <Feature
          iconBgColor="bg-gray-300"
          icon={free}
          title="Free Delivery"
          subtitle="Nourishment comes with no extra cost - enjoy free delivery with every order."
        />
        <Feature
          iconBgColor="bg-gray-300"
          icon={onTime}
          title="Daily On-Time Delivery"
          subtitle="Expect your meal right on time, every single day."
        />
      </div>
    </div>
  );
};

const Feature = ({ iconBgColor, icon, title, subtitle }) => {
  return (
    <div className="flex items-between mb-4 w-full h-48 mt-5 lg:h-24 lg:mb-8 lg:mt-10 px-4">
      <div
        className={`flex flex-col lg:flex-row items-center justify-center lg:items-left lg:justify-left h-auto rounded-lg lg:mr-4 ${iconBgColor}`}
      >
        <img
          src={icon}
          alt="Icon"
          className="feature-icon w-20 h-20 lg:w-20 lg:h-20"
        />

        <div className="flex flex-col lg:pl-8">
          <h2 className="text-2xl text-center leading-5 pt-2 lg:text-left lg:text-4xl font-ExtraCondensedBold text-mainOrange lg:w-80">
            {title}
          </h2>
          <p className="text-sm text-center lg:text-left leading-4 pt-2 lg:text-xl font-InterRegular font-DailybiteDarkChocolaty lg:leading-6 lg:w-60">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
