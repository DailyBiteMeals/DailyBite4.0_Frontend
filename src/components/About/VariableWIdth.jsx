import React, { Component } from "react";
import Slider from "react-slick";

// logo images
import volt from "../../assets/Logo/CustomerLogo/Volt.png";
import Insnap from "../../assets/Logo/CustomerLogo/Insnap.png";
import BoltEarth from "../../assets/Logo/CustomerLogo/BoltEarth.png";
// import Practo from "../../assets/Logo/CustomerLogo/Practo.png";
import Clayworks from "../../assets/Logo/CustomerLogo/Clayworks.png";
import Keploy from "../../assets/Logo/CustomerLogo/Keploy.png";
import Trigsy from "../../assets/Logo/CustomerLogo/Trigsy.png";
import Nasscom from "../../assets/Logo/CustomerLogo/Nasccom.png";
import Fampay from "../../assets/Logo/CustomerLogo/Fampay.png";
import newtral from "../../assets/Logo/CustomerLogo/Newtral.png";

export default class VariableWidth extends Component {
  render() {
    const images = [
      { src: volt },
      { src: Insnap },
      { src: BoltEarth },
      // { src: Practo },
      { src: Clayworks },
      { src: Keploy },
      { src: Trigsy },
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
      <div className="flex flex-col justify-center items-center overflow-x-hidden py-5 lg:py-5">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ width: image.width }}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-60 px-8 py-4 lg:w-80 lg:p-5"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
