import React, { useState, useEffect } from "react";
import DiscountPosterMobile from "../../assets/DiscountPoster/WebChristmasDesk.png";
import DiscountPosterDesktop from "../../assets/DiscountPoster/WebChristmasMob.png";
import { Link } from "react-router-dom";

const DiscountPoster = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 655); // Assuming mobile width is below 768px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 655);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Link to={"/contact"}>
        <div className="flex justify-center px-4 lg:px-20 py-5 lg:py-10 h-full">
          {isMobile ? (
            <img
              src={DiscountPosterMobile}
              alt="Mobile Image"
              className="h-auto"
            />
          ) : (
            <img
              src={DiscountPosterDesktop}
              alt="Desktop Image"
              className="h-auto"
            />
          )}
        </div>
      </Link>
    </div>
  );
};

export default DiscountPoster;
