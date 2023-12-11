import React, { Component } from "react";
import Slider from "react-slick";

import voltoffice from "../../assets/office/voltoffice.png";
import insnapoffice from "../../assets/office/Insnapoffice.png";
import nightshift from "../../assets/office/nightshift.png";
import voltnightshift from "../../assets/office/voltnightshift.png";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
    };

    const sliderStyle = {
      width: "100%", // Set the slider width to 30%
      margin: "0 auto", // Center the slider horizontally
    };

    return (
      <div className="w-full flex justify-center">
        {" "}
        {/* Ensure the parent container is full-width and centers its content */}
        <div style={sliderStyle}>
          <Slider {...settings}>
            <div>
              <img
                src={voltoffice}
                alt=""
                className="w-full object-cover rounded-lg"
              />{" "}
              {/* Adjust image width */}
            </div>
            <div>
              <img
                src={insnapoffice}
                alt=""
                className="w-full object-cover rounded-lg"
              />{" "}
              {/* Adjust image width */}
            </div>
            <div>
              <img
                src={nightshift}
                alt=""
                className="w-full object-cover rounded-lg"
              />{" "}
              {/* Adjust image width */}
            </div>
            <div>
              <img
                src={voltnightshift}
                alt=""
                className="w-full object-cover rounded-lg"
              />{" "}
              {/* Adjust image width */}
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
