import React from "react";
import VariableWidth from "./VariableWIdth";

const CustomerCarsoule = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-ExtraCondensedBlack text-center uppercase py-5 lg:py-10">
        Our <span className="text-mainOrange">happy </span> customers
      </h1>
      <div className="flex justify-center items-center px-4 lg:px-20 w-full">
        <VariableWidth />
      </div>
    </div>
  );
};

export default CustomerCarsoule;
