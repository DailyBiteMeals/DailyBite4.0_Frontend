import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialProducts, categoriesWithDescription } from "./ProductsData";

import allproductsimage from "../../assets/Home-products/daily-meals.png";

const ProductsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = initialProducts.filter(
    (product) =>
      selectedCategory === "" || product.category === selectedCategory
  );

  return (
    // Categories Section

    <div className="container mx-auto w-full px-4 lg:px-20">
      <div className="flex justify-center space-x-1 my-2 lg:space-x-4 lg:my-4">
        <button
          className={`${
            selectedCategory === ""
              ? "bg-mainOrange text-white text-sm lg:text-2xl"
              : "bg-mainOrange text-white text-sm lg:text-2xl"
          } relative w-1/5 h-24 p-2 lg:py-2 lg:px-4 rounded-md w-full bg-mainOrange lg:w-1/5 lg:h-40`}
          onClick={() => filterProducts("")}
        >
          <div className="absolute top-2 left-2 text-white font-ExtraCondensedBlack w-8 text-base leading-3 lg:w-16 uppercase text-left lg:text-5xl lg:leading-10 z-10">
            Our All Products
          </div>
          <img
            src={allproductsimage}
            alt="All Products of dailyBite"
            className="absolute bottom-0 right-0 w-18 lg:w-36 object-cover"
          />
        </button>
        {categoriesWithDescription.map((categoryData, index) => (
          <button
            key={index}
            className={`relative w-1/5 h-24 p-2 lg:py-2 lg:px-4 rounded-md w-full lg:w-1/5 lg:h-40`}
            style={{ backgroundColor: categoryData.color }}
            onClick={() => filterProducts(categoryData.name)}
          >
            <div className="absolute top-2 left-2 text-white font-ExtraCondensedBlack w-8 text-base leading-3 lg:w-16 uppercase lg:text-5xl lg:leading-10 text-left z-10">
              {categoryData.name}
            </div>
            <img
              src={categoryData.imageUrl}
              alt={categoryData.name}
              className="absolute bottom-0 right-0 w-20 lg:w-40 object-cover"
            />
          </button>
        ))}
      </div>

      {/* List of Products */}
      {categoriesWithDescription.map((categoryData) => (
        <div
          key={categoryData.name}
          className={`${
            selectedCategory !== "" && selectedCategory !== categoryData.name
              ? "hidden"
              : "block"
          }`}
        >
          <div className="text-2xl lg:text-4xl font-ExtraCondensedBlack text-DailybiteDarkChocolaty lg:mb-2 text-center uppercase ">
            {categoryData.name}
          </div>
          <p className="text-xs mb-2 lg:mb-4 lg:text-base font-InterMedium text-center ">
            {categoryData.description}
          </p>
          <div className="grid grid-cols-2 gap-4 py-2 lg:grid-cols-3 lg:gap-4 lg:py-4">
            {filteredProducts
              .filter((product) => product.category === categoryData.name)
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="w-full"
                >
                  <div className="bg-DailyBiteWhitish rounded-lg p-2 lg:p-4 rounded-md cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover rounded-lg"
                    />
                    <h3 className="text-xl lg:text-3xl font-ExtraCondensedBold z-10">
                      {product.title}
                    </h3>
                    <p className="text-xs leading-4 lg:text-base lg:leading-5 font-InterMedium text-left text-DailyBiteDarkChocolaty">
                      {product.includes}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
