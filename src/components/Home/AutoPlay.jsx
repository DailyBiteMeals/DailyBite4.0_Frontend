import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// logo images
import volt from "../../assets/Logo/CustomerLogo/Volt.png";
import Insnap from "../../assets/Logo/CustomerLogo/Insnap.png";
import BoltEarth from "../../assets/Logo/CustomerLogo/BoltEarth.png";
// import Practo from "../../assets/Logo/CustomerLogo/Practo.png";
import Clayworks from "../../assets/Logo/CustomerLogo/Clayworks.png";
import Keploy from "../../assets/Logo/CustomerLogo/Keploy.png";
// import Trigsy from "../../assets/Logo/CustomerLogo/Trigsy.png";
import Nasscom from "../../assets/Logo/CustomerLogo/Nasccom.png";
import Fampay from "../../assets/Logo/CustomerLogo/Fampay.png";
import newtral from "../../assets/Logo/CustomerLogo/Newtral.png";

export default class autoplay extends Component {
  render() {
    const images = [
      { src: volt },
      { src: Insnap },
      { src: BoltEarth },
      // { src: Practo },
      { src: Clayworks },
      { src: Keploy },
      // { src: Trigsy },
      { src: Nasscom },
      { src: Fampay },
      { src: newtral },
    ];

    const settings = {
      className: "slider variable-width",
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 500,
      cssEase: "ease",
    };

    return (
      <div>
        <Slider
          {...settings}
          className="flex justify-center items-center overflow-x-hidden lg:overflow-x-hidden"
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-48 px-2 py-2 p-5 lg:w-96 lg:px-4 lg:py-4 lg:p-10"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
