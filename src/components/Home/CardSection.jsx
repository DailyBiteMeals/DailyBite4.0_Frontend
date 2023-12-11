import React from "react";
import { Link } from "react-router-dom";

// Images (import your image paths here)
import dailyMeals from "../../assets/Home-products/daily-meals.png";
import cateringServices from "../../assets/Home-products/catering-service.png";
import dryFruits from "../../assets/Home-products/dry-fruits.png";
import healthySnacks from "../../assets/Home-products/fruit-bowl-dry-fruits.png";
import fruitBowl from "../../assets/Home-products/fruit-bowl.png";
import onDemandSnacks from "../../assets/Home-products/on-demand-snacks.png";
import PrivilegeMeal from "../../assets/Home-products/Privilege-meal.png";
import Snacks from "../../assets/Home-products/snacks.png";
import StandardMeals from "../../assets/Home-products/Standard-meal.png";

const CardSection = () => {
  const cardData = [
    {
      color: "#F22252",
      text: "Healthy Meals",
      image: dailyMeals,
      link: "/products",
    },
    {
      color: "#F2A322",
      text: "Daily Snacks",
      image: Snacks,
      link: "/products",
    },
    {
      color: "#86ED59",
      text: "Healthy Snacks",
      image: healthySnacks,
      link: "/products",
    },
    {
      color: "#0A9CF2",
      text: "Corporate Events Catering",
      image: cateringServices,
      link: "/products",
    },
    {
      color: "#F15A2D",
      text: "Privilege Meals",
      image: PrivilegeMeal,
      link: "/products",
    },
    {
      color: "#542010",
      text: "Standard Meals",
      image: StandardMeals,
      link: "/products",
    },
    {
      color: "#020F49",
      text: "Fruit Bowls",
      image: fruitBowl,
      link: "/products",
    },
    {
      color: "#F23822",
      text: "Dry fruits",
      image: dryFruits,
      link: "/products",
    },
    {
      color: "#BF6541",
      text: "On-Demand Snacks",
      image: onDemandSnacks,
      link: "/products",
    },
  ];

  return (
    <div className="w-full bg-white px-4 lg:px-20">
      <div>
        <p className="font-InterMedium uppercase px-2 text-xl lg:px-4 lg:text-2xl">
          Our offerings
        </p>
      </div>
      <div className="flex flex-wrap  w-full items-stretch items-center justify-center">
        {/* First Row */}
        {cardData.slice(0, 4).map((card, index) => (
          <div
            key={index}
            className={` w-40 lg:w-1/4 ${
              index !== 3 ? "lg:pr-4 " : ""
            } pr-2 mb-2 lg:mb-4 items-stretch relative`}
          >
            <Link to={card.link} rel="noopener noreferrer">
              <div
                className="relative h-48 p-4 rounded-tl-xl lg:w-full lg:h-100 lg:p-4 lg:rounded-tl-2xl"
                style={{ backgroundColor: card.color }}
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="absolute w-40 h-auto bottom-0 right-0 max-w-full max-h-full lg:w-60 lg:h-auto lg:bottom-0 lg:right-0 lg:max-w-full lg:max-h-full"
                />
                <span className="text-white font-ExtraCondensedBlack uppercase absolute top-0 left-0 p-2 text-4xl leading-8 lg:top-0 lg:left-0 lg:p-6 lg:text-7xl lg:leading-14">
                  {card.text}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Second Row */}
      <div>
        <p className="font-InterMedium uppercase align-center px-2 text-xl lg:px-4 lg:text-2xl lg:py-2">
          Our Products
        </p>
      </div>
      <div className="flex flex-wrap justify-center justify-items-center">
        {cardData.slice(4, 9).map((card, index) => (
          <div
            key={index}
            className={`w-40 lg:w-1/5 ${
              index !== 4 ? "pr-2 lg:pr-4 " : ""
            } mb-2 lg:mb-4 items-stretch relative`}
          >
            <Link to={card.link} rel="noopener noreferrer">
              <div
                className="h-40 p-2 rounded-tl-xl lg:w-full lg:h-48 relative lg:p-2 lg:rounded-tl-xl"
                style={{ backgroundColor: card.color }}
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-40 h-auto bottom-0 right-0 max-w-full max-h-full lg:w-40 lg:h-auto absolute lg:bottom-0 lg:right-0 lg:max-w-full lg:max-h-full"
                />
                <span className="text-white font-ExtraCondensedBlack absolute uppercase text-4xl leading-8 lg:top-0 lg:left-0 lg:p-6 lg:text-5xl lg:leading-10">
                  {card.text}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
