import React from "react";
import Doodle from "../../assets/DailyBiteFoodDoodle.png";

const DeliveryLocation = () => {
  return (
    <div className="flex flex-wrap px-4 lg:px-20">
      {/* First Column - Map */}
      <div className="w-full lg:w-1/2 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7910752845905!2d77.64627967491744!3d12.921145487389634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15fba96523db%3A0xa0b02bd79b5ee87d!2sDailyBite!5e0!3m2!1sen!2sin!4v1701766732935!5m2!1sen!2sin"
          width="100%"
          style={{ border: 2 }}
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Second Column - Title, Description, Image */}
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-ExtraCondensedBold mb-4">
          Now we are delivering in <br></br>
          <span className="w-full text-6xl lg:text-8xl text-mainOrange font-ExtraCondensedBlack leading-12 uppercase">
            Namma Bengaluru!
          </span>
        </h2>
        {/* <p className="mb-4 font-InterMedium text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          aliquam quod? Nemo a, facere nulla necessitatibus veritatis quibusdam
          iusto error. A assumenda, impedit modi odio vero neque eos qui odit!
        </p> */}
        <img
          className="w-full h-auto rounded-lg"
          src={Doodle}
          alt="Bangalore"
        />
      </div>
    </div>
  );
};

export default DeliveryLocation;
