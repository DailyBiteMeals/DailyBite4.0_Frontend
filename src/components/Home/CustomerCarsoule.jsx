import React from "react";

import AutoPlay from "./AutoPlay";

const CustomerCarousel = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-full lg:mt-6 lg:mb-6 lg:px-20 lg:pt-5">
      <div className="w-full">
        <p className="font-ExtraCondensedBlack uppercase text-center align-right p-0 m-0">
          <span className="text-7xl align-right">
            Our <span className="text-mainOrange">happy</span>
          </span>
          <br></br>
          <span className="text-7xl leading-2">customers</span>
        </p>
      </div>

      <div className="w-full lg:w-4/5">
        <AutoPlay />
      </div>
    </div>
  );
};

export default CustomerCarousel;
